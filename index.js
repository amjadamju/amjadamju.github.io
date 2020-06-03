var app = new Vue({
    el: '#app',
    data: {
         name:'Amjad',
         image : 'IMG_0758-01.jpeg' ,
         aboutme : 
              [
              {about:'I\'m a Web developer'}
          ],
         description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur risus nibh, rutrum eu felis vel, euismod sagittis diam. Mauris dignissim. ',
         time : 'You loaded this page on ' + new Date().toLocaleString(),
         status : 'Working on it'
    }
  })
  var cont = new Vue({
       el: "#contact",
       data: {
            email:'Contact Me :)'
       }
  })