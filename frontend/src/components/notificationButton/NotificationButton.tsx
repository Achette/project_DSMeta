import axios from "axios";
import { toast } from "react-toastify";
import icon from "../../assets/img/notification-icon.png";
import { BASE_URL } from "../../utils/Request";
import "./NotificationButton.css";

type TNotificationButtonProps = {
  id: number;
};

export const NotificationButton = ({ id }: TNotificationButtonProps) => {
  const handleClickSubmit = (id: number) => {
    axios
      .get(`${BASE_URL}/sales/${id}/notification`)
      .then((res) => toast.info("SMS enviado com sucesso!"));
  };

  return (
    <div onClick={() => handleClickSubmit(id)} className="dsmeta-red-btn">
      <img src={icon} alt="Notificar" />
    </div>
  );
};
