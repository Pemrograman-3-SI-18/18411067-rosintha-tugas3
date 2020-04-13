<template>
  <q-layout class="bg-blue-grey-1" view="hHr Lpr lFf">
    <q-page-container>
      <q-page padding class="row items-center justify-center">
        <div class="row full-width">
          <div class="col-md-8 offset-md-2 col-xs-12 q-pl-md q-pr-md q-pt-sm">
            <q-card flat class="bg-white text-blue" >
              <div class="row">
                <q-card-section class="text-accent-grey-14" >
                  <div class="text-h4">Registrasi</div>
                </q-card-section>
                <div class="col-md-12 col-xs-12q-pt-md">
                  <div class="q-pa-md">

                    <q-form
                      @submit="onSubmit"
                      @reset="onReset"
                      class="q-gutter-md"
                    >
                      <q-input
                        filled
                        v-model="username"
                        label="Username"
                        hint="Username"
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'Tidak Boleh Kosong!']"
                      />

                      <q-input
                        filled
                        v-model="NoHp"
                        label="NoHp"
                        hint="NoHp"
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'Tidak Boleh Kosong!']"
                      />

                      <q-input
                        filled
                        v-model="Email"
                        label="Email"
                        hint="Email"
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'Tidak Boleh Kosong!']"
                      />

                      <q-input
                        filled
                        type="Password"
                        v-model="Password"
                        label="Password"
                        hint="Password"
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'Tidak Boleh Kosong!']"
                      />

                      <div>
                        <q-btn label="registrasi" type="submit" color="primary"/>
                        <q-btn label="login" to="/auth/login" color="primary" flat class="q-ml-sm" />
                      </div>
                    </q-form>

                  </div>
                </div>
              </div>
            </q-card>
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'registrasi',
  data () {
    return {
      username: null,
      NoHp: null,
      Email: null,
      Password: null,
      accept: false
    }
  },

  methods: {
    onSubmit () {
      if (this.accept !== true) {
        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'warning',
          message: 'You need to accept the license and terms first'
        })
      } else {
        this.$q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'cloud_done',
          message: 'Submitted'
        })
      }
    },

    onReset () {
      this.name = null
      this.age = null
      this.accept = false
    }
  }
}
</script>

<style scoped>

</style>
