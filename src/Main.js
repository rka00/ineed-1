import React from "react";
import { useNavigate } from "react-router-dom";
import "../src/Main.css";

import googleCalendarPlugin from "@fullcalendar/google-calendar";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

import { auth } from "./components/main/firebase_config.js";

// const todolistStyle = {
//   background: `url(${Todolist})`, // Todolist 이미지를 배경으로 설정
//   width: "250px",
//   height: "200px", // 높이 조절
//   position: "relative", // 위치 지정
//   backgroundSize: "cover",
// };

// const CalenderStyle = {
//   background: `url(${Calender})`, // Todolist 이미지를 배경으로 설정
//   width: "300px",
//   height: "400px", // 높이 조절
//   position: "relative", // 위치 지정
//   backgroundSize: "cover",
// };


export default function Main() {
  return (
    <div className="main">
      <div className="navbar">
        <div className="logo"></div> {/* 이미지 파일 */}
        <div className="who"></div> {/* Who SVG 이미지 */}
        <div className="mypage">mypage</div>
        <div className="logout">logout</div>
      </div>

      {/* <div style={todolistStyle}></div>
      <div style={CalenderStyle}></div> */}
      <div className="topbar">
        <div className="todo">
          <div className="title_todo">To do list</div>
          <div className="todo_box">
            <div className="list">
              <div className="checkbox"></div>
              <div className="list_text">개발세션 정기미팅 5:30</div>
            </div>
            <div className="list_line"></div>
            <div className="list">
              <div className="checkbox"></div>
              <div className="list_text">개발세션 정기미팅 5:30</div>
            </div>
            <div className="list_line"></div>
            <div className="list">
              <div className="checkbox"></div>
              <div className="list_text">개발세션 정기미팅 5:30</div>
            </div>
            <div className="list_line"></div>
            
          </div>
        </div>

        <div className="calendar">
          <div className="title_cal">Calendar</div>
          {/* <div className="cal_box"></div> */}
          <FullCalendar
            plugins={[dayGridPlugin, googleCalendarPlugin]}
            nitialView="dayGridMonth"
            googleCalendarApiKey={
              "505023142086-ksfstvllrbegphdf68qhr8fg4ko87nl3.apps.googleusercontent.com"
            }
            events={{
              googleCalendarId: "tpduscnfehd1@gmail.com",
            }}
          />
        </div>
      </div>
      <div className="line"></div>
        <div className="noti">
          <div className="noti1">
            <div className="noti1_text">장학공지</div>
            <div className="noti1_box"></div>
          </div>
          <div className="noti2">
            <div className="noti2_text">학사공지</div>
            <div className="noti2_box">
              
            </div>
          </div>
        </div>
        <div className="noti">
          <div className="noti1">
            <div className="noti3_text">산업정보시스템 공지사항</div>
            <div className="noti1_box"></div>
          </div>
          <div className="noti2">
            <div className="noti4_text">대학 공지사항</div>
            <div className="noti2_box"></div>
          </div>
        </div>
      <button
        onClick={() => {
          auth.signOut();
          console.log("로그아웃 합니다");
        }}
      >
        EXIT
      </button>
    </div>
  );
}
