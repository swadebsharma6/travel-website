var carObject ={
   vehicle : 'car', 
   imgUrl: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
   farePerKilo: 3,
   capacity: 4,
   description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam voluptatem mollitia harum quis laboriosam quod minima esse, eaque vel eius.'
};

var bikeObject ={
   vehicle : 'bike', 
   imgUrl: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
   farePerKilo: 2,
   capacity: 2,
   description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam voluptatem mollitia harum quis laboriosam quod minima esse, eaque vel eius.'
}

var busObject ={
   vehicle : 'bus', 
   imgUrl: 'https://images.unsplash.com/photo-1570125909517-53cb21c89ff2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
   farePerKilo: 3,
   capacity: 30,
   description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam voluptatem mollitia harum quis laboriosam quod minima esse, eaque vel eius.'
}


function displayServices(service){
    const mainSection = document.getElementById('main-section');
    const stringifiedObj = JSON.stringify(service);
    const div = document.createElement('div');
    div.innerHTML = `
    <div class="card mb-3 mx-auto"  style="max-width: 800px;">
                <div class="row g-0">
                  <div class="col-md-4">
                    <img src=${service.imgUrl} class="img-fluid rounded-start h-100" alt="...">
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">TransportMode: ${service.vehicle}</h5>
                      <p class="card-text">Description: ${service.description} </p>
                      <p class="card-text">
                      <small class="text-muted">Fare/Kilo :${service.farePerKilo} </small>
                      <small class="text-muted">Capacity :${service.capacity} </small>
                      </p>
                      <button type="button"class="btn btn-primary" data-bs-toggle="modal" onclick='handleBooking(${stringifiedObj})'; data-bs-target="#exampleModal">
                           BOOK NOW
                      </button>
                    </div>
                  </div>
                </div>
              </div>
    `;
    mainSection.appendChild(div);
}

displayServices(bikeObject);
displayServices(busObject);
displayServices(carObject);



// handle Booking info
function handleBooking(obj){
  const modalBody = document.getElementById('modal-boddy');

  modalBody.innerHTML=`
  <div class="card mx-auto" style="width: 18rem;">
  <img src=${obj.imgUrl} class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Vehicle Mode: ${obj.vehicle}</h5>
    <p class="card-text">Description: ${obj.description}</p>
    <p class="card-text">
    <small class="text-muted">Fare/Kilo :${obj.farePerKilo} </small>
    <small class="text-muted">Capacity :${obj.capacity} </small>
    </p>
    <div class="d-flex flex-column" role="search">
    <input class="form-control mt-2" type="search" placeholder="Search" aria-label="Search">
    <input class="form-control mt-2" type="search" placeholder="Search" aria-label="Search">
    <button class="btn btn-outline-primary mt-2" type="submit">Submit</button>
  </div>
  </div>
</div>
  
  `
};




function calculateTotalCost (){

}
