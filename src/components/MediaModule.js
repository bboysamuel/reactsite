import React, {useState} from "react"
import Modal from 'react-bootstrap/Modal'
import data from "../data/projects.json"


const MediaModule = (props)=> {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
const allProjects = data

  return (<>

      <Modal show={show} onHide={handleClose} width="720px" height="460px">
        <Modal.Header closeButton>
          <Modal.Title>{allProjects[5].name} </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {/* <iframe width="100%" src={allProjects[5].vidEmbed} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}

        </Modal.Body>
        {/* <Modal.Footer>
          <p> this is a really cool project</p>
        </Modal.Footer> */}
      </Modal>
  </>)
}

export default MediaModule
