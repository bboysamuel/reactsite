import React, {useState}  from 'react'

import ReactDOM from 'react-dom'
import ModalVideo from 'react-modal-video'
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button"
import data from "../data/projects.json"
import MediaModule from "./MediaModule"


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



  const allProjects = data

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  }



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
        <iframe width="100%" src={allProjects[5].vidEmbed} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

        </Modal.Body>
        <Modal.Footer>
          <p> this is a really cool project</p>
        </Modal.Footer>
      </Modal> */}

        {/* <MediaModule /> */}


  <div id="projectsTop" className="portfolio safe">
    <div className="row">

      {allProjects && allProjects.map((project) => {
        console.log('project', project.name)
        const projectId = project.id;
        console.log('projectId', projectId)
        return( <>
          <div key={projectId} className="col-lg-4 col-sm-6 portfolio-item">
            <div className="card h-100">
               <img onClick={handleShow} className="imgClick card-img-top" src={project.imageURL} alt=""></img>
               <div>

            {/* <MediaModule
              key={projectId}
              show={show}
              setShow={setShow}
              /> */}

              <Button variant="primary" onClick={ (event) => {
                console.log("IDDD", project.id)
                 handleShow()
              }

                }>
              Launch demo modal
              {project.id}
            </Button>
        <div>
            <Modal show={show} onHide={handleClose} width="720px" height="460px">
            <Modal.Header closeButton>
              <Modal.Title>{project.name} </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <iframe width="100%" src={project.vidEmbed} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

            </Modal.Body>
            <Modal.Footer>
              <p> this is a really cool project</p>
            </Modal.Footer>
          </Modal>
        </div>

               </div>


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



// NOT USED #BEST version. but couldnt get it to work
// export default Portfolio
