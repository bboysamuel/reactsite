import React, {useState} from "react"
import Modal from 'react-bootstrap/Modal'
import data from "../data/projects.json"
import Button from 'react-bootstrap/Button'


const MediaModule = (props)=> {
  // const {projectId, show, setShow} = props
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
const allProjects = data

  return (<>
      <Button variant="primary" onClick={handleShow}>
        Play Video
      </Button>
      <Modal show={show} onHide={handleClose} width="720px" height="460px">
{      allProjects && allProjects.map((project) => {
  return (    <>
  <div key={project.id}>
    <Modal.Header closeButton>
      <Modal.Title>{project.name} </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <div>
        <iframe width="100%" src={project.vidEmbed} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>

    </Modal.Body>
    {/* <Modal.Footer>
      <p> this is a really cool project</p>
    </Modal.Footer> */}
    </div>
    </>)
})
        }
      </Modal>
  </>)
}

export default MediaModule
