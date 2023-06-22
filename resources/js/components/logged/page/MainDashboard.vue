<template>
  <div>
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
    <q-page v-if="oke">
      <q-table
        title="Undangan Online"
        :rows="data"
        :columns="columns"
        :pagination="pagination"
        :rows-per-page-options="[10, 20, 50]"
        :filter="filter"
      >
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

        <template v-slot:body-cell-link="props">
          <q-td :props="props">
            <q-btn color="orange" @click="copyLink(props.row)">copy link</q-btn>
          </q-td>
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
                  <div>Nama</div>
                  <q-input
                    v-model="newItem.nama"
                    dense
                    outlined
                    :rules="[(val) => !!val || 'Nama is required']"
                  />
                </div>

                <div>
                  <div>Pasangan (optional)</div>
                  <q-input v-model="newItem.pasangan" dense outlined />
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
    </q-page>
  </div>
</template>

<script>
import { Loading, Notify, Dialog } from "quasar";

export default {
  data() {
    return {
      data: [],
      hero: null,
      oke: false,
      columns: [
        {
          name: "nama",
          required: true,
          label: "Nama",
          align: "left",
          field: "nama",
          sortable: true,
        },
        {
          name: "pasangan",
          required: true,
          label: "Pasangan",
          align: "left",
          field: "pasangan",
          sortable: true,
        },
        {
          name: "link",
          required: true,
          label: "Link",
          align: "left",
          field: "link",
          sortable: false,
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
      newItem: { nama: "", pasangan: "" },
      pagination: {},
      filter: null,
    };
  },
  methods: {
    submit() {
      if (this.hero == "inashol09") {
        this.oke = true;
      }
    },

    saveNewItem() {
      // Add validation if needed
      Loading.show();
      let payload = {
        key: "924rjnjefj9e9re###*w",
        ...this.newItem,
      };
      axios
        .post("/api/undangan", payload)
        .then((response) => {
          this.data.unshift(response.data);
          this.newItem = { nama: "", pasangan: "" };
        })
        .finally(() => {
          this.showAddDialog = false;
          Loading.hide();
        });
    },

    copyToClipboard(text) {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.style.position = "fixed";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
    },

    copyLink(e) {
      Notify.create({
        message: e.nama + " link berhasil di copy !",
        position: "top",
        color: "green",
      });

      let link = import.meta.env.VITE_BASE_URL + "/" + e.link;
      this.copyToClipboard(link);
    },

    fill() {
      Loading.show();
      axios
        .get("/api/undangan")
        .then((response) => {
          this.data = response.data;
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
        .post("/api/hapus-undangan", payload)
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
        message: `Apakah anda yakin menghapus undangan : ${e.nama} ?`,
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