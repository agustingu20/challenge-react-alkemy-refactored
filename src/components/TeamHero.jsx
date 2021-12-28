import React, { useState } from "react";
import { Button, Card, Collapse, Modal } from "react-bootstrap";

function TeamHero({ team, deleteHero }) {
  const [open, setOpen] = useState(false);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Card
        aria-controls="example-collapse-text"
        aria-expanded={open}
        className="card-style"
      >
        <Card.Img variant="top" src={`${team?.image.url}`} />
        <Card.Body>
          <Collapse in={open}>
            <div id="example-collapse-text">
              <Card.Title className="card-title">{team?.name}</Card.Title>
              <div>
                <ul className="text-dark px-0">
                  <li>Pelea: {team?.powerstats.combat}</li>
                  <li>Durabilidad: {team?.powerstats.durability}</li>
                  <li>Inteligencia: {team?.powerstats.intelligence}</li>
                  <li>Poder: {team?.powerstats.power}</li>
                  <li>Velocidad: {team?.powerstats.speed}</li>
                  <li>Fuerza: {team?.powerstats.strength}</li>
                </ul>
              </div>
            </div>
          </Collapse>
          <div className="d-flex justify-content-between">
            <Button
              onClick={() => setOpen(!open)}
              variant="primary"
              className="btn-sm btn-team"
            >
              {!open ? " Ver +" : "Ver -"}
            </Button>
            {!open && team?.biography.alignment === "bad" ? (
              <Card.Title className="card-title-btn-bad-team">
                {team?.biography.alignment}
              </Card.Title>
            ) : (
              !open &&
              team?.biography.alignment === "good" && (
                <Card.Title className="card-title-btn-good-team">
                  {team?.biography.alignment}
                </Card.Title>
              )
            )}
            {!open && team?.biography.alignment === "neutral" && (
              <Card.Title className="card-title-btn-neutral-team">
                {team?.biography.alignment}
              </Card.Title>
            )}
            {open && (
              <Button
                variant="warning"
                className="btn-sm btn-team"
                onClick={handleShow}
              >
                + info
              </Button>
            )}
            {open && (
              <Button
                variant="danger"
                className="btn-sm btn-team"
                onClick={deleteHero}
                value={team.id}
              >
                Eliminar
              </Button>
            )}
          </div>
        </Card.Body>
      </Card>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Detalles</Modal.Title>
        </Modal.Header>
        <div>
          <ul>
            <li>Peso: {team?.appearance?.weight.slice(1)}</li>
            <li>Altura: {team?.appearance?.height.slice(1)} </li>
            <li>Nombre: {team?.biography?.["full-name"]}</li>
            <li>Alias: {team?.biography?.aliases.slice(1)}</li>
            <li>Color de ojos: {team?.appearance?.["eye-color"]}</li>
            <li>Color de cabello: {team?.appearance?.["hair-color"]}</li>
            <li>Lugar de trabajo: {team?.work?.base}</li>
          </ul>
        </div>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default TeamHero;
