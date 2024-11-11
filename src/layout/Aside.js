import { X } from 'lucide-react';
import Offcanvas from 'react-bootstrap/Offcanvas';

const Aside = ({show,handleClose}) => {
  return (
    <aside>
      <Offcanvas show={show} onHide={handleClose} placement='end'>
        <Offcanvas.Header>
            <div className='d-flex justify-content-end w-100'>
                <span role='button' className='background-dark text-white p-3 rounded-circle' onClick={handleClose}><X/></span>
            </div>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <div className='fs-6 my-3'>
                <div className='fs-3 fw-bold fs-6'>Qui sommes nous  ?</div>
                <p className='my-3 fs-6'>Une nouvelle entreprise dont l'unique objectif est de répondre aux besoins de nos clients, Nous faisons de notre mieux pour assurer un transfert parfait.</p>
                <>
                    <div className='fs-5'>Nous sommes disponible</div>
                    <div className='fs-light'>Lundi - Dimanche: 24h sur 24</div>
                </>
            </div>

            <div className='fs-6 my-3'>
                <div className='fs-3 fw-bold fs-6'>Liens utiles</div>
            </div>
        </Offcanvas.Body>
      </Offcanvas>
    </aside>
  )
}

export default Aside
