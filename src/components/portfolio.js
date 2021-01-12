import React, {useState}  from 'react'

import ReactDOM from 'react-dom'
import ModalVideo from 'react-modal-video'
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button"
import data from "../data/projects.json"
import MediaModule from "./MediaModule"


const Portfolio = () => {



  const allProjects = data

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  }



  return (<>


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
               { project.vidEmbed ?
                           <iframe width="100%" src={project.vidEmbed} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                           :
               <img onClick={handleShow} class="imgClick card-img-top" src={project.imageURL} alt=""></img>

                }
               <div>

            {/* <MediaModule
              key={projectId}
              show={show}
              setShow={setShow}
              /> */}

              {/* <Button variant="primary" onClick={ (event) => {
                console.log("IDDD", project.id)
                 handleShow()
              }

                }>
              Launch demo modal
              {project.id}
            </Button> */}

        <div>
            <Modal show={show} onHide={handleClose} width="720px" height="460px">
            <Modal.Header closeButton>
              <Modal.Title>{project.name} </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <iframe width="100%" src={project.vidEmbed} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

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



export default Portfolio
