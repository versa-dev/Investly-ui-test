import Image from "next/image";
import s from "./HomeCard.module.css";

const HomeCard = ({ data }) => {
  return (
    <div className={s.root}>
      <div className={s.homeImage}>
        <Image src={data.image} height={157} width={312} />
      </div>
      <div className={s.title}>{data.title}</div>
      <div className={s.description}>{data.description}</div>
      <div className={s.info}>
        <div className={s.detail}>
          <Image src="/assets/images/location.svg" height={16} width={16} />
          <div className={s.description}>{data.city}</div>
        </div>
        <div className={s.detail}>
          <Image src="/assets/images/bedroom.svg" height={16} width={16} />
          <div className={s.description}>{data.roomNum} bedroom</div>
        </div>
        <div className={s.detail}>
          <Image src="/assets/images/apartment.svg" height={16} width={16} />
          <div className={s.description}>{data.apart}</div>
        </div>
      </div>
      <button className={s.detailButton}>View listing details</button>
    </div>
  );
};

export default HomeCard;
