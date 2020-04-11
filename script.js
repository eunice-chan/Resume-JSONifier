const resume = new Vue({
  el: "#vue",
  data: {
    capitalize: "capitalize",
    filepath: "",
    resume: {
      "basics": {
        "name": "",
        "label": "",
        "picture": "",
        "email": "",
        "phone": "",
        "website": "",
        "summary": "",
        "location": {
          "address": "",
          "postalCode": "",
          "city": "",
          "countryCode": "",
          "region": "",
        },
        "profiles": [],

      },
      "work": [],
      "volunteer": [],
      "education": [],
      "awards": [],
      "publications": [],
      "skills": [],
      "languages": [],
      "interests": [],
      "references": [],
    },
    objects: {
      profiles: {
        "network": "",
        "username": "",
        "url": "",
      },
      work: {
        "company": "",
        "position": "",
        "website": "",
        "startDate": "",
        "endDate": "",
        "summary": "",
        "highlights": [],
      },
      volunteer: {
        "organization": "",
        "position": "",
        "website": "",
        "startDate": "",
        "endDate": "",
        "summary": "",
        "highlights": [],
      },
      education: {
        "institution": "",
        "area": "",
        "studyType": "",
        "startDate": "",
        "endDate": "",
        "gpa": "",
        "courses": [],
      },
      awards: {
        "title": "",
        "date": "",
        "awarder": "",
        "summary": "",
      },
      publications: {
        "name": "",
        "publisher": "",
        "releaseDate": "",
        "website": "",
        "summary": "",
      },
      skills: {
        "name": "",
        "level": "",
        "keywords": [],
      },
      languages: {
        "language": "",
        "fluency": "",
      },
      interests: {
        "name": "",
        "keywords": [],
      },
      references: {
        "name": "",
        "reference": "",
      },
    },
  },
  methods: {
    test: function() {
      var element = document.createElement('a');
      element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(JSON.stringify(this.resume)));
      element.setAttribute('download', "resume.json");

      element.style.display = 'none';
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    },
    saveFile: function() {
    },
    fileSelected: function(e) {
      this.filepath = e.target.files[0].name
    },
  },
});
