// import React from 'react'
// import "./Testimonials.css"
// import { Swiper, SwiperSlide } from 'swiper/react';
// import porfilepic1 from "../../img/profile1.jpg"
// import profilepic2 from "../../img/profile2.jpg"
// import profilepic3 from "../../img/profile3.jpg"
// export const Testimonials = () => {
//     const clients =[
//         {
//              img: porfilepic1,
//              review:
//              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi nsequatur distinctio commodi.",
//         },
//         {
//             img:profilepic2,
//             review:
//             "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde reprehenderit asperiores recusandae?",
//         },
//         {
//             img:profilepic3,
//             review:
//            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil reiciendis obcaecati maxime?"
//         }
//     ]
//   return (
//     <div className="t-wrapper">
//         <div className="t-heading">
//             <span>Client always get</span>
//             <span>Expectional work</span>
//             <span>from me..</span>
//             <div className='blur t-blur1' style={{background: "var(--purple"}}></div>
//             <div className='blur t-blur2' style={{background: "skyblue"}}></div>

//         </div>
//         {/* slidet */}
//         <Swiper>
//             {clients.map((client, index)=>{
//                 return(
//                     <SwiperSlide key={index}>
//                         <img src={client.img} alt=""/>
//                         <span>{client.review}</span>
//         </SwiperSlide>
//                 )
//             })}
//         </Swiper>
//     </div>
//   )
// }
