<template>
  <q-page>
    <div class="q-pa-md">
      <q-table
        title="Treats"
        :data="data"
        :columns="columns"
        row-key="id"
        :filter="filter"
        :loading="loading"
      >

        <template v-slot:top>
          <q-item-label
            header
            class="text-grey-8"
          >
            DATA TRANSAKSI
          </q-item-label>
          <!--          <q-btn class="q-ml-sm" color="primary" :disable="loading" label="Remove row" @click="removeRow" /> />-->
          <q-space />
          <q-input borderless dense debounce="300" color="primary" v-model="filter">
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
        </template>

      </q-table>
    </div>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      loading: false,
      filter: '',
      rowCount: 10,
      columns: [
        {
          name: 'desc',
          required: true,
          label: 'KODE TRANSAKSI',
          align: 'left',
          field: row => row.kodetransaksi,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'namapembeli', align: 'center', label: 'NAMA PEMBELI', field: 'namapembeli', sortable: true },
        { name: 'judulbuku', label: 'JUDUL BUKU', field: 'judulbuku', sortable: true },
        { name: 'hargabuku', label: 'HARGA BUKU', field: 'hargabuku' },
        { name: 'jumlahbeli', label: 'JUMLAH BELI', field: 'jumlahbeli' },
        { name: 'total', label: 'TOTAL', field: 'total' }
      ],
      data: [
        {
          kodetransaksi: 'Trasn-001',
          namapembeli: 'John',
          judulbuku: 'Pemograman 3',
          hargabuku: 'Rp 250.000',
          jumlahbeli: '2',
          total: 'Rp 500.000'
        },
        {
          kodetransaksi: 'Trasn-002',
          namapembeli: 'Rosintha',
          judulbuku: 'Pemograman 3',
          hargabuku: 'Rp 250.000',
          jumlahbeli: '1',
          total: 'Rp 250.000'
        },
        {
          kodetransaksi: 'Trasn-003',
          namapembeli: 'Julianto',
          judulbuku: 'Prak.Pemograman 3',
          hargabuku: 'Rp 350.000',
          jumlahbeli: '1',
          total: 'Rp 1,050.000'
        }
      ]
    }
  },

  methods: {
    // emulate fetching data from server
    addRow () {
      this.loading = true
      setTimeout(() => {
        const
          index = Math.floor(Math.random() * (this.data.length + 1)),
          row = this.original[Math.floor(Math.random() * this.original.length)]
        if (this.data.length === 0) {
          this.rowCount = 0
        }
        row.id = ++this.rowCount
        const addRow = { ...row } // extend({}, row, { name: `${row.name} (${row.__count})` })
        this.data = [...this.data.slice(0, index), addRow, ...this.data.slice(index)]
        this.loading = false
      }, 500)
    },

    removeRow () {
      this.loading = true
      setTimeout(() => {
        const index = Math.floor(Math.random() * this.data.length)
        this.data = [...this.data.slice(0, index), ...this.data.slice(index + 1)]
        this.loading = false
      }, 500)
    }
  }
}
</script>
