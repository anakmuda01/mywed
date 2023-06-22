<template>
  <q-layout view="lhr lpR lFr">
    <q-page-container class="row justify-center" style="padding-bottom: 100px">
      <q-page class="col-12 col-md-10 q-pa-md">
        <div v-if="!oke">
          <q-form @submit.prevent="submit">
            <q-input
              :rules="[(v) => (val !== null && val !== '') || 'Required']"
              label="hero"
              dense
              outlined
              v-model="hero"
              class="q-mb-sm"
            ></q-input>
            <q-btn type="submit" color="orange">submit</q-btn>
          </q-form>
        </div>
        <div v-if="oke">
          <q-table
            :rows="data"
            :columns="columns"
            :pagination="pagination"
            :rows-per-page-options="[10, 20, 50]"
            :filter="filter"
          >
            <template v-slot:top-left="props">
              <div class="row">
                <div class="col-12 text-h5">Love Story Indo</div>
                <div>
                  <div>Status Aktif</div>
                  <q-toggle v-model="toggle" color="green" />
                </div>
              </div>
            </template>

            <template v-slot:top-right="props">
              <q-input
                outlined
                dense
                debounce="300"
                v-model="filter"
                placeholder="Search"
                class="q-mr-sm"
              >
                <template v-slot:append>
                  <q-icon name="search" />
                </template>
              </q-input>
              <q-btn
                :class="$q.screen.xs ? 'q-mt-sm' : ''"
                label="Add"
                color="primary"
                @click="showAddDialog = true"
              />
            </template>

            <template v-slot:body-cell-aksi="props">
              <q-td :props="props">
                <q-btn
                  @click="openDelete(props.row)"
                  color="red"
                  icon="delete"
                  flat
                  round
                  size="sm"
                >
                  <q-tooltip class="bg-accent">hapus</q-tooltip>
                </q-btn>
              </q-td>
            </template>
          </q-table>

          <q-dialog v-model="showAddDialog" persistent>
            <q-card style="width: 800px">
              <q-card-section>
                <q-form @submit.prevent="saveNewItem">
                  <div>
                    <div>
                      <div>Tanggal</div>
                      <q-input
                        v-model="newItem.date"
                        dense
                        outlined
                        :rules="[(val) => !!val || 'Tanggal is required']"
                      />
                    </div>

                    <div>
                      <div>Text</div>
                      <q-input
                        type="textarea"
                        autogrow
                        v-model="newItem.text"
                        dense
                        outlined
                        :rules="[(val) => !!val || 'Tanggal is required']"
                      />
                    </div>

                    <div class="row q-mt-md">
                      <q-space></q-space>
                      <q-btn
                        label="Cancel"
                        color="secondary"
                        @click="showAddDialog = false"
                        class="q-mr-sm"
                      />
                      <q-btn label="Save" color="primary" type="submit" />
                    </div>
                  </div>
                </q-form>
              </q-card-section>
            </q-card>
          </q-dialog>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { Loading, Notify, Dialog } from "quasar";

export default {
  data() {
    return {
      data: [],
      hero: null,
      oke: false,
      toggle: false,
      columns: [
        {
          name: "date",
          required: true,
          label: "Tanggal",
          align: "left",
          field: "date",
          sortable: true,
        },
        {
          name: "text",
          required: true,
          label: "Text",
          align: "left",
          field: "text",
          sortable: true,
        },
        {
          name: "aksi",
          required: true,
          label: "Aksi",
          align: "left",
          field: "aksi",
          sortable: false,
        },
      ],
      showAddDialog: false,
      newItem: { date: "", text: "" },
      pagination: {},
      filter: null,
    };
  },

  watch: {
    toggle() {
      this.toggleAktif();
    },
  },
  methods: {
    submit() {
      if (this.hero == "inashol09") {
        this.oke = true;
      }
    },

    toggleAktif() {
      Loading.show();
      let payload = {
        key: "924rjnjefj9e9re###*w",
        indo_aktif: this.toggle,
      };
      axios
        .post("/api/config-toggle-story-indo", payload)
        .then((response) => {
          this.toggle = response.data ? true : false;
        })
        .finally(() => {
          Loading.hide();
        });
    },

    saveNewItem() {
      // Add validation if needed
      Loading.show();
      let payload = {
        key: "924rjnjefj9e9re###*w",
        ...this.newItem,
      };
      axios
        .post("/api/love-story-indo", payload)
        .then((response) => {
          this.data.push(response.data);
          this.newItem = { date: "", text: "" };
        })
        .finally(() => {
          this.showAddDialog = false;
          Loading.hide();
        });
    },

    fill() {
      Loading.show();
      axios
        .get("/api/love-story-indo")
        .then((response) => {
          this.toggle = response.data.toggle ? true : false;
          this.data = response.data.stories;
        })
        .finally(() => {
          Loading.hide();
        });
    },

    destroy(e) {
      Loading.show();
      let payload = {
        key: "924rjnjefj9e9re###*w",
        id: e.id,
      };
      axios
        .post("/api/hapus-love-story-indo", payload)
        .then(() => {
          const idToRemove = e.id;
          this.data = this.data.filter((obj) => obj.id !== idToRemove);
        })
        .finally(() => {
          Loading.hide();
        });
    },

    openDelete(e) {
      Dialog.create({
        dark: true,
        title: "Confirm",
        message: `Apakah anda yakin menghapus story : ${e.text} ?`,
        cancel: true,
        persistent: true,
      })
        .onOk(() => {
          this.destroy(e);
        })
        .onOk(() => {
          // console.log('>>>> second OK catcher')
        })
        .onCancel(() => {
          // console.log('>>>> Cancel')
        })
        .onDismiss(() => {
          // console.log('I am triggered on both OK and Cancel')
        });
    },
  },

  mounted() {
    this.fill();
  },
};
</script>