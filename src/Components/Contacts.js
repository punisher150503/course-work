import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import GoogleMapComponent from './GoogleMap';

const Contacts = () => {
    return (
        <div className="contacts-menu">
            <div className="title-contact">Contacts</div>
            <GoogleMapComponent/>
        </div>
    )
}

export default Contacts