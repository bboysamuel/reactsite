import React, {useState}  from 'react'

import ReactDOM from 'react-dom'
import ModalVideo from 'react-modal-video'
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button"
// import {MediaModule} from "./MediaModule"

// const handleModal = () => {
//   const [show, setShow] = useState("");
//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   return     (<Modal show={show} onHide={handleClose}>
//   <Modal.Header closeButton>
//     <Modal.Title>Video Title One</Modal.Title>
//   </Modal.Header>
//   <Modal.Body>
//   <iframe src="https://www.youtube.com/embed/7-Fe9bzDVAk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
// </Modal.Body>
// </Modal>)
// }
// handleModal()

// const ProjectTwo = () => {
//   const [show, setShow] = useState(true);
//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   return     (<Modal show={show} onHide={handleClose}>
//   <Modal.Header closeButton>
//     <Modal.Title>Video Title Two</Modal.Title>
//   </Modal.Header>
//   <Modal.Body>
//   <iframe src="https://www.youtube.com/embed/7-Fe9bzDVAk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
// </Modal.Body>
// </Modal>)
// }


// const Portfolio = () => {

//   const projectsArray = [
//     {
//       id: 1 ,
//       name: 'ListItMarketing.com' ,
//       desc: "Marketing services & tech tools for the professional real estate industry." ,
//       imageURL: null ,
//       link: 'https://listitmarketing.com' ,
//       vidEmbed: '<iframe width="100%" src="https://www.youtube.com/embed/y4UES3H5gTA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' ,
//       vidURL: null,
//     },

//     {
//       id: 2 ,
//       name: 'Book' ,
//       desc: "The Book on marketing real estate" ,
//       imageURL: null ,
//       link: 'https://amazon.com' ,
//       vidEmbed: null ,
//       vidURL: null,
//     },

//     {
//       id: 3 ,
//       name: 'INEVIFIT' ,
//       desc: "Smart Scale links to your phone and fitbit to help track your body metrics and fitness goals. Available on Amazon.com and Bed Bath & Beyond." ,
//       imageURL: null ,
//       link: 'https://amazon.com' ,
//       vidEmbed: ' <iframe width="100%" src="https://www.youtube.com/embed/GNdpCMCd_xw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' ,
//       vidURL: null,
//     },

//     {
//       id: 4 ,
//       name: 'KW Luxury Homes' ,
//       desc: " Award Winning Santa Barbara & Montecito Real Estate Team at The World’s Largest Real Estate Agency" ,
//       imageURL: null ,
//       link: 'https://SantaBarbaraMontecito.com' ,
//       vidEmbed: '     <iframe width="100%" src="https://www.youtube.com/embed/Nlz1leCkU-o" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' ,
//       vidURL: null,
//     },

//     {
//       id: 5 ,
//       name: 'Commercial & Entertainment' ,
//       desc: `Stunt Sport, Trickstar Reality Show, Freakdance, Scary Movie 5, Gatorade's Mission G, Dark Games, Vans, Redbull, Simple Shoes, and more<a href="https://www.imdb.com/name/nm6350143/"> IMDB.com` ,
//       imageURL: null ,
//       link: 'https://SantaBarbaraMontecito.com' ,
//       vidEmbed: '    <iframe width="100%" src="https://www.youtube.com/embed/GtpUesWmJkI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' ,
//       vidURL: null,
//     },

//     {
//       id: 6 ,
//       name: 'Partners In Housing' ,
//       desc: `A non-profit focused on finding homes for homeless families.` ,
//       imageURL: null ,
//       link: 'https://SantaBarbaraMontecito.com' ,
//       vidEmbed: '  <iframe width="100%" src="https://www.youtube.com/embed/cwT4BAZa0HE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' ,
//       vidURL: null,
//     },

//   ]





//   return <div id="projectsTop" className="portfolio safe">
//     {/* <ProjectOne />
//     <ProjectTwo /> */}



// <div className="row">
//   <div className="col-lg-4 col-sm-6 portfolio-item">
//     <div className="card h-100">
//       {/* <a href="#"><img class="card-img-top" src="media/listitmarketing.jpg" alt=""></img> </a> */}
//       <iframe width="100%" src="https://www.youtube.com/embed/y4UES3H5gTA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
//       <div className="card-body">
//         <h4 className="card-title">
//           <a href="#">ListIT</a>
//         </h4>
//         <p className="card-text"><a href="https://listitmarketing.com"> ListItMarketing.com</a>: Marketing services & tech tools for the professional real estate industry.</p>
//       </div>
//     </div>
//   </div>
//   <div className="col-lg-4 col-sm-6 portfolio-item">
//     <div className="card h-100">
//       {/* <a href="#"><img class="card-img-top" src="media/housingSantaBarbaraCounty.jpg" alt=""></img> </a> */}
//       <iframe width="100%" src="https://www.youtube.com/embed/83zxNjz6LRI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
//       <div className="card-body">
//         <h4 className="card-title">
//           <h3 onClick={() => {
//             console.log('clicked')
//             // handleShow()
//           }}> INEVIFIT</h3>
//         </h4>
//         <p className="card-text">The <a href="https://www.inevifit.com/" >INEVIFIT</a> Smart Scale links to your phone and fitbit to help track your body metrics and fitness goals. Available on Amazon.com and Bed Bath & Beyond.</p>
//       </div>
//     </div>
//   </div>
//   <div className="col-lg-4 col-sm-6 portfolio-item">
//     <div className="card h-100">
//       {/* <a href="#"><img class="card-img-top" src="media/bvi-portfolio-blue-triangle.jpg" alt=""></img> </a> */}
//       <iframe width="100%" src="https://www.youtube.com/embed/GNdpCMCd_xw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
//       <div className="card-body">
//         <h4 className="card-title">
//           <a href="#">Blue T</a>
//         </h4>
//         <p className="card-text"><a href="https://bluetriangle.com"> Blue T</a>: Solutions to monitor and analyze your end-user experience with your web application.</p>
//       </div>
//     </div>
//   </div>
//   <div className="col-lg-4 col-sm-6 portfolio-item">
//     <div className="card h-100">
//       {/* <a href="#"><img class="card-img-top" src="media/website_technology.jpg" alt=""></img> </a> */}
//       <iframe width="100%" src="https://www.youtube.com/embed/Nlz1leCkU-o" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
//       <div className="card-body">
//         <h4 className="card-title">
//           <a href="#">KW Luxury Homes</a>
//         </h4>
//         <p className="card-text"><a href="https://SantaBarbaraMontecito.com">KW Luxury Homes Division</a>: Award Winning Santa Barbara & Montecito Real Estate Team at The World’s Largest Real Estate Agency</p>
//       </div>
//     </div>
//   </div>
//   <div className="col-lg-4 col-sm-6 portfolio-item">
//     <div className="card h-100">
//       {/* <a href="#"><img class="card-img-top" src="media/maxresdefault-1024x576.jpg" alt=""></img> </a> */}
//       <iframe width="100%" src="https://www.youtube.com/embed/GtpUesWmJkI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
//       <div class="card-body">
//         <h4 class="card-title">
//           <a href="#">Commercial & Entertainment</a>
//         </h4>
//         <p class="card-text">Stunt Sport, Trickstar Reality Show, Freakdance, Scary Movie 5, Gatorade's Mission G, Dark Games, Vans, Redbull, Simple Shoes, and more<a href="https://www.imdb.com/name/nm6350143/"> IMDB.com</a></p>
//       </div>
//     </div>
//   </div>
//   <div className="col-lg-4 col-sm-6 portfolio-item">
//     <div className="card h-100">
//       {/* <a href="#"><img class="card-img-top" src="media/inevifit.jpg" alt=""></img> </a> */}
//       <iframe width="100%" src="https://www.youtube.com/embed/cwT4BAZa0HE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
//       <div class="card-body">
//         <h4 class="card-title">
//           <a href="#">Partners In Housing</a>
//         </h4>
//         <p className="card-text"><a href="https://www.partnersinhousingsolutions.org/">  Partners In Housing</a>: A non-profit focused on finding homes for homeless families. </p>
//       </div>
//     </div>
//   </div>
//   <div>
//     {/* <h2> More...</h2>
//     <p>
//       <ul>
//         <li>
//         <a href="https://thesantabarbaraspa.com/"> Santa Barbara Spa </a> Official Website

//         </li>

//       <li>
//       Emegear - Medical product

//           </li>
//       <li>
//         <a href="https://SBTechList.com"> SBTechList.com</a>: Tech List Directory

//           </li>
//       <li>
//       <a href="https://engelventures.com/">Engel Ventures</a> - Venture Capital

//           </li> */}
//       {/* <li>
//        SantaBarbara Venture Partners - Venture Capital

//           </li> */}
//           {/* <li>
//       <a href="https://idriveglobal.com">Idrive </a>

//           </li> */}
//           {/* <li>
//       <a href="https://roadgamers.com">Road Gamers Texas </a>

//           </li>
//       <li>
//       And more...

//           </li>
//       </ul>
//     </p> */}
//   </div>
// </div>
//   </div>
// }


const Portfolio = () => {
  // const [show, setShow] = useState(true);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  // const handleModal = async (id) => {
  //   console.log('clicked handleModal')

  //   return     (<Modal show={show} onHide={handleClose}>
  //   <Modal.Header closeButton>
  //     <Modal.Title>Video Title One</Modal.Title>
  //   </Modal.Header>
  //   <Modal.Body>
  //   {/* <iframe src="https://www.youtube.com/embed/7-Fe9bzDVAk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
  // </Modal.Body>
  // </Modal>)
  // }


  const allProjects = [
    {
      id: 1 ,
      name: 'ListItMarketing.com' ,
      desc: "Marketing services & tech tools for the professional real estate industry." ,
      imageURL: null ,
      link: 'https://listitmarketing.com' ,
      vidEmbed: '<iframe width="100%" src="https://www.youtube.com/embed/y4UES3H5gTA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' ,
      vidURL: null,
    },

    {
      id: 2 ,
      name: 'Book' ,
      desc: "The Book on marketing real estate" ,
      imageURL: null ,
      link: 'https://amazon.com' ,
      vidEmbed: null ,
      vidURL: null,
    },

    {
      id: 3 ,
      name: 'INEVIFIT' ,
      desc: "Smart Scale links to your phone and fitbit to help track your body metrics and fitness goals. Available on Amazon.com and Bed Bath & Beyond." ,
      imageURL: null ,
      link: 'https://amazon.com' ,
      vidEmbed: ' <iframe width="100%" src="https://www.youtube.com/embed/GNdpCMCd_xw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' ,
      vidURL: null,
    },

    {
      id: 4 ,
      name: 'KW Luxury Homes' ,
      desc: " Award Winning Santa Barbara & Montecito Real Estate Team at The World’s Largest Real Estate Agency" ,
      imageURL: null ,
      link: 'https://SantaBarbaraMontecito.com' ,
      vidEmbed: '     <iframe width="100%" src="https://www.youtube.com/embed/Nlz1leCkU-o" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' ,
      vidURL: null,
    },

    {
      id: 5 ,
      name: 'Commercial & Entertainment' ,
      desc: `Stunt Sport, Trickstar Reality Show, Freakdance, Scary Movie 5, Gatorade's Mission G, Dark Games, Vans, Redbull, Simple Shoes, and more<a href="https://www.imdb.com/name/nm6350143/"> IMDB.com` ,
      imageURL: `media/inevifit.jpg` ,
      link: 'https://SantaBarbaraMontecito.com' ,
      vidEmbed: `    <iframe width="100%" src="https://www.youtube.com/embed/GtpUesWmJkI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> `,
      vidURL: null,
    },

    {
      id: 6 ,
      name: 'Partners In Housing' ,
      desc: `A non-profit focused on finding homes for homeless families.` ,
      imageURL: null ,
      link: 'https://SantaBarbaraMontecito.com' ,
      vidEmbed: `https://www.youtube.com/embed/cwT4BAZa0HE` ,
      vidURL: null,
    },

  ]

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  return (<>

{console.log(allProjects)}
{
  // loop through all projects. pass in the id from the click below. put it in a new component function
}

      {/* <Modal show={show} onHide={handleClose} width="720px" height="460px">
        <Modal.Header closeButton>
          <Modal.Title>{allProjects[5].name} </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" src={allProjects[5].vidEmbed} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}

        {/* {        allProjects[5].vidEmbed ?
<iframe width="100%" src={allProjects[5].vidEmbed} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
:
<img class="card-img-top" src={allProjects[5]imageURL} alt=""></img>
}  */}
        {/* </Modal.Body> */}
        {/* <Modal.Footer>
          <p> this is a really cool project</p>
        </Modal.Footer> */}
      {/* </Modal> */}




  <div id="projectsTop" className="portfolio safe">
    <div className="row">

      {allProjects && allProjects.map((project) => {
        console.log('project', project.name)
        return( <>
          <div key={project.id} className="col-lg-4 col-sm-6 portfolio-item">
            <div className="card h-100">
            {/* {project.vidEmbed} */}
             {/* <a href="#"> */}
               <img onClick={handleShow} class="imgClick card-img-top" src={project.imageURL} alt=""></img>
               {/* </a> */}
               {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}
              <div className="card-body">
                <h4 className="card-title"> <a href="{link}">{project.name}</a> </h4>
                <p className="card-text"> {project.desc} </p>
              </div>
            </div>
          </div>
        </>)

      })}

    </div>
  </div>



  </>)


}



// export default Portfolio
