/*Ngôn ngữ lập trình*/
$(document).ready(function () {
  let myChart = document.getElementById('myChart1').getContext('2d');

      // Global Options
      // Chart.defaults.global.defaultFontFamily = 'Lato';
      // Chart.defaults.global.defaultFontSize = 18;
      // Chart.defaults.global.defaultFontColor = '#777';

      let massPopChart = new Chart(myChart, {
        type:'doughnut', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
        data:{
          labels:['C++', 'JAVA', 'Javascript','HTML.CSS'  ],
          datasets:[{
            label:'Kinh nghiệm',
            data:[
              2,3,1 ,3,3
            ],
            //backgroundColor:'green',
            backgroundColor:
              'rgb(169, 237, 11)',

            borderWidth:2,
            borderColor:'#00FF00',
            // hoverBorderWidth:2,
            // hoverBorderColor:'#000'
          }]
        },
        options:{
          // title:{
          //   display:true,
          //   text:'Largest Cities In Massachusetts',
          //   fontSize:25
          // },
          legend:{
            display:true,
            position:'right',
            labels:{
              fontColor:'#000'
            }
          },
          layout:{
            padding:{
              left:50,
              right:0,
              bottom:0,
              top:0
            }
          },
          tooltips:{
            enabled:true
          }
        }
      })
    });

//Ngôn ngữ
$(document).ready(function () {
  let myChart = document.getElementById('myChart2').getContext('2d');

      // Global Options
      // Chart.defaults.global.defaultFontFamily = 'Lato';
      // Chart.defaults.global.defaultFontSize = 18;
      // Chart.defaults.global.defaultFontColor = '#777';

      let massPopChart = new Chart(myChart, {
        type:'doughnut', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
        data:{
          labels:['Nhật', 'Hoa', 'Anh'],
          datasets:[{
            label:'Thành thạo',
            data:[
              2,1,3
            ],
            backgroundColor:'green',
            backgroundColor:
              'rgb(169, 237, 11)',

            borderWidth:2,
            borderColor:'#00FF00',
            hoverBorderWidth:2,
              hoverBorderColor:'#000'
          }]
        },
        options:{
          // title:{
          //   display:true,
          //   text:'Largest Cities In Massachusetts',
          //   fontSize:25
          // },
          legend:{
            display:true,
            position:'right',
            labels:{
              fontColor:'#000'
            }
          },
          layout:{
            padding:{
              left:50,
              right:0,
              bottom:0,
              top:0
            }
          },
          tooltips:{
            enabled:true
          }
        }
      })
    });

function initMap() {
    var uluru = { lat: 10.752428, lng: 106.651472 };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 18,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}

function create() {
    var name = $('input[name="name"]').val();
    var email = $('input[name="email"]').val();

    if (name == "" || email == "") {
        window.alert("Name and Email are required !");
    } else {
        $.ajax({
            url: "http://janeto.us.to:7752/api/contact",
            method: "POST",
            headers: {
                ContentType: "application/json"
            },
            data: {
                name: name,
                email: email,
                message: $(' textarea').val()
            },
            success: function(data) {
                window.alert("Create successfully !");
                
            },
            error: function(err) {
                console.log(err);
            }
        });
    }
}

