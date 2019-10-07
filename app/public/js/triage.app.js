var patientTriageApp = new Vue({
  el: '#patientTriageApp',
  data: {
    patient: {}
  },
  methods: {
    handleSubmit() {
       fetch('api/waiting/post.php', {
       method:'post',
       body: JSON.stringify(this.patient),
       headers: {
         "Content-Type": "application/json; charset"
       }
       //   data: this.patient
       // })
       // .then( ... )
       waitingApp.patients.push(this.patient);
       this.handleReset();
    },
    handleReset() {
      this.patient = {
        patientGuid: '',
        firstName: '',
        lastName: '',
        dob: '',
        sexAtBirth: '',
        visitDescription: '',
        // visitDateUtc
        priority: 'low'
      }
    }
  },
  created() {
    this.handleReset();
  }
});
