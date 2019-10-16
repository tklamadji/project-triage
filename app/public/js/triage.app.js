var patientTriageApp = new Vue({
  el: '#patientTriageApp',
  data: {
    patient: {}
  },
  methods: {
    handleSubmit() {
<<<<<<< HEAD
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
=======
      fetch('api/waiting/post.php', {
        method:'POST',
        body: JSON.stringify(this.patient),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      .then( response => response.json() )
      .then( json => { waitingApp.patients = json})
      .catch( err => {
        console.error('WORK TRIAGE ERROR:');
        console.error(err);
      })

      this.handleReset();
>>>>>>> d86e7a1fd389dad214d044bbb20db6eb3cf3cecc
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
