import React, { useState } from "react";
import { useSelector } from "react-redux";
import { toggleTodo } from "../Actions/Actions";
import { editTodo } from "../Actions/Actions";
import { deleteTodo } from "../Actions/Actions";
import { useDispatch } from "react-redux";
import Modaltodo from "./Modal";

const ListTask = ({ filterList, status }) => {
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todos);
  const [show, setShow] = useState(false);

  const handleToggle = (id) => {
    dispatch(toggleTodo(id));
  };

  const [newDesc, setNewDesc] = useState("");
  const handleChangeDesc = (e) => {
    setNewDesc(e.target.value);
  };

  const handledelete = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div className="container">
      <h1>What's the plan for today?</h1>
      {status === "DONE" || status === "UNDONE"
        ? filterList.map((todo) => (
            <div key={todo.id}>
              <ul className="todo-ul">
                <li
                  style={{
                    textDecoration: todo.isDone ? "line-through" : "none",
                  }}
                >
                  {todo.description}
                </li>
                {/*Edit part*/}
                <Modaltodo
                  handleEdit={() => {
                    dispatch(editTodo(todo.id, newDesc));
                  }}
                  handleChangeDesc={handleChangeDesc}
                  newDesc={newDesc}
                  setShow={setShow}
                  show={show}
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Edit_icon_%28the_Noun_Project_30184%29.svg/1024px-Edit_icon_%28the_Noun_Project_30184%29.svg.png"
                  className="icon"
                  alt="edit"
                  onClick={() => setShow(true)}
                />
                {/*Toggle icon*/}
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAhFBMVEX///8AAAD29vb5+fnd3d3y8vL8/Pzh4eGvr6/a2tro6OjAwMB6enrV1dWVlZWioqLPz8+JiYnJycljY2O8vLw4ODiPj4+GhoYtLS1BQUGbm5t0dHRqamrs7OwgICBQUFAVFRVaWlopKSlNTU1/f38NDQ2rq6tmZmY7OzugoKAaGhpOTk7GtQ2aAAAM9UlEQVR4nN1dZ2OrvA7ODmlG0+zRDNImPc37///fbWbRACxbBvc+3056AAtsjUeyXKn4Rr3Z70areW+8nB62+2P1eNxvpx9fvfn3ZNRo1r0/3ys60Wy3qGbjEM8mjbIHaoN29LnMkS2J5XzyUvaQBeisYoFwTxzHp3bZQzdArbu2ke4p5bpbK1uELDRPOxfx7tidmmULwqMeaYh3Qxy1yhaHYPiuJt4N637ZIiXRej0oy3fB4hTKh3yZexDvhl4IyrXz5U2+C+KyJ+tQYtbt8G/4/y3fBbtOSfI1jK3D8WPcW52iyajTbrc7/eFoEp0G63hqLOO4jPXYNPJdFuvVKGN0tf5ksM7zza9YF+4FfOeO6bg+9c08sFojWu9z77fyLBHEcJsznPFJGipsovdj9j23xamcerb/cp7Zavj+LPvNzVXFSEc3axDTb7c472WQtSwHSiJkopX1Aeca0Xonw0cqIEwepj9911V7SjfNEL2pPSIN6a9X2YVs99inTFUfQrFJXSMDfXPVnDHPOao/BiBVxXgyVfVBwd+QPu+GmT/Os46/o9d1GPPy9fwyR7VP8DSP/mmTX4Kxf/W9Sbzamb/HdFj5jnr2IQujh9P66e8ZvI4pyomqVF7PP4/7yPNLW/YK4ZWTb1potqG+yRn+y9WAftpZrRUnYCEuojkmj3HZBCBvjHznsgkihMQykqtbzlH78jBIFzQSY/snvZj7gpGPUTqgCUYn5K0Y5/AcAk0LAG31SXQtQ8csg0tMj+EARW7BiQrY8zVOa+B1JPmGjKEvlvEyQYSHKLDTTDw/8TdSS/TJKjK/dkMFDMwKVrhBmuvBFmX2AqwKIYlLQTBAyaAA60HIIAV6glr64MxgpULoqnfzayd/QUAS83yYX/vyF9bgiAxS4IwQLROeFmW+gkBRkNxgMXSFCHWSkBuZX0wWocyZLQYkwy4YZA1fWxwhYw6SIJI4zDG6dudtmPYgzIpkkNiVPYdSmpQAWUcHwcVNfHGAhrCBx1jdCK7GczQ0yqLCfASRMcMxocAPKgwkwyD6Cg7zuyjgWSbjLTDzFKCzRmKCWHI19oTCIy0oayHLmiLaSsAIFAVKrYhSFZj0CC/mpayFbB0hXy+8OUqpFVlMgAKuhadhOoCwFsIUGLIz4cWEhLVYy65Hxn7sZ5QOIKyFVBOiTyhx9QoBYS2OwpgA3cBj3YMdKGshjQmQIvUySgfUCGshTWgjW/jqZZgOIKyFeITInfExSBcQ1kJcXIOchdC4J1JUJ3K3r4BBhecqRzEIa7GVUytBr0JadCY3ZeglhUU+CVmLTnfIxBsf4AaB2ULCWmSlom88IymaRHomLHcmxgJm1dE+PxXi+CHBGpZHSoqysoaXeBvwM8F5IEhx+IeItUgyAIAlbINb7L2OWAjKWmSVXYOkWVLdQHsaUmgvZC3AlsYkiwonaUB6RspaAEESbg+cpCGlmv7DAubML8hy/M5nGDsHlKgQ11pAm/D7vaG5D6f2UF5rAaPkJ4tTD3SSUtYi/+WDdbvn7xRM3GRVawGtwoPmeJPephDUyLZgE9YCRiGPrwWMSDA08D8soFlEB97L3b+DsUkodRe2rAW47h7Iw2Vo7pN2Rh6Ti4S1MFWA0I19YW5mGvveWI+eJ9NCWAvjxQP10822x8mfDHny2sM92ntRTC61FuCyHv3JcBkmyEsPxSiUtRDsEgH9cq4fDH5Ws1J1MIn0U1ROtRbQEbr8AjNOZpMOunnaAXOMBRTRRpC7v8ww6Kwa3QS6edq1mSLWggJO8cucBAbErIyYFC9qhiOOtRbINb3kiIFHY7gbnKSB9BhkGWvBAaian3CrZfMxaPcPLYbVtdaiguz7FE9bQ73IbO3W8fZcay0ugN5CC6ke0+obZluisGiAxwe+qwUrhiWCxsL4NszWUgUe2bXW4gqoB9twi6FAbTFdMpzZAZcdIgmAW4zgfJOkHZlN+o5lcIS12Nv59cAlmsCJIdogSgzXzxxwCTXa5HaWXn2cvMcKpu9l65rZYrq178Rjx1pwALZsDkschCwUs8n0aB1NEdbCmhIDC68HtyhKN8GSLapV66nlXmvxBNAQa8jciKMEunbEO/5vsGYtGJzgfRwHR0lNq/VDd4g4VBIAFTiFElrE602mEaDY06JeoEvvMKABF1BCmzVUY/orCdez2w4RAmBXt+4SVlpMJ1qZHhTVWuQDqPi98yy9gOkBKLGsMb7YMRQDGv6oIiGu+pON0pG1oIBcpKsuvYNpuWsaFhDnT9xCBwPqLWgP7Rc4bBx3hdmeMHfWggDNUiChQx9bJiY2iVRc+lqkAWkaYM5cmE+mWc9/uRdpsBYEwB5ucTDlAJtoSoO1IAAO0hTGFm68J+00UT1kLyoV1oIAvOplJU7+0zGHT9s4VPdZSSMysXX2yoHYYgz1vGsjPa7LcLqfRF7IVicbieJDoOadJwlN/KUbWTXWAgPF+CAwkxfAY3DRFG9l9VgLjDh50xVels6gcUKKEdJjLTBQgaIlI5wOw2iKsBZ6RSDgtl1EtWjU6LeYcyuIGdJkLRAg591x66qYAmLHiSW3r7XIB85bwHyuUjY3piICQ6TLWiDAdddCAbZWATRzvECCHVRmLRBw/hC+bxWv6QKmLf7vvZVZCwSQA75E08AD0FsOTPrtYW1j/AfdLTokjw9DAr0O60x/5Zu+JKyFbvsUWosBV73i0Uop6TfnWoscQN/4WgUAftGsEGaiqUXdA2sBAQOW609g3avOGCb9tiDeqHZdHOD9bm4o5MlUn5ZxZssD6r3uwN1vJoqrOdUCf+JAAt+qj6vgmOzmLTaY3zw9kEDN/j4Bmzvfl4DXZ26yTuKyq7XIBKTf7z/Gyd/22o/k0m93KLEWScAitkd3fKhf1Q8brKeeMORhkxzUbQ/bB9WB/rEOXPrtAh8nxUFn8WmJwK8+tpTEnIBeth+BJ5yfP8NYx0f1PZN+83JoDLQLvwVQ0L3yskmWpN/caT0OMD/0601Ad9zPuVgo/eZpexXU2wlVDYkVP+08Iffk51hRSNEkpwl0BDwd/ZWMpjy1EYPMQpI5QHlKP49POMCeWktDcw/DMjhNffW2vh/Quvd1ZCqMIcYZf/O3Fbj79j7z15MCJgrgd0J7RAJsHWwAVCmJ/gpPSA/vMBkTjDNlQNG430MN/QAl9kgEAQ/7COxUNSNAlpL6LYj7K2GEjkCqhHIVaMddYM2+DIBIduZ/oExDWN2+8oGyPZxfhjijkNrwmAB59ix9EMP/E06LExMgv5MntpHB9HisqQdAe57msiA6JZQWICZAzHNaeD00+28hAhVHpPKF6CMG1bYtEyhjl/5t0EfcFzZCR+C95RmBAyq6D6xBZCpQXURWhhAX3v2NKArn8DKpdET6OZfNFwLUHSCbZsKVLn/Bs8GFLTmuCq6gCPCMEgRch5ubAEWfPMRzZgCwHs3ns/Gy1c/S6gJXCRpMOlySFlAbRQa4itOEzcbNZ4I2GXgR7o2uwoU+lvv+iwCpKjfMFuBkn4d6AiXgEgHTSmrSQihU+hTv7NwaX0mqtdTrelRAalgFRRbk2gDPIaXlnSIHjBwGHd65QaTyUZZP8rHxURdOhwFfQAsnw6JtaNWjuNKJ7noNSUQqoIXrFQc8UekUtTFoLaJt9EveLEGXkJ1TQrVNICLS+nHp4V0PMP11QrCLzB4A6/XDVKKXn3Vjehs4TK0TvVvZ6YyYDsmJuWbaCOzKDKY2VP25bppimkGcy7MazHZ49zJVZodWacQG08lQQzGQjVjVkuipGjnOQ0dA/iseiudRGcWuNpu4yVF0xU2L6fGjaJ4ZG1utTotUOCN2X4pijSM7Q4r7jDX2A+pmHPgdWttissRM45uqSw9KHk3G1P5g5z9o7PNPXqo7Hq2YfVB17rd4asPs1LhAd+/wHYx7c4XHHGOTcbOv8BQA8PrmB99+vmOqfP6Yvxd+SVy+o747/pIqn1ffP/Wp1bny9tqv1Cd5zrxz3v0dsZ7tiFL28/1g752brqe/3Gp1puHn9JmeGk8UkiRiGgn8Yrpym639+Tnr9gUVotVSbNQdi4Elb9IacZFaAgUyKCNyhAfEfh1J9/i2X+Psexbr6qdEVACHXtQx27bRHL4yHXswCicWNlka5/e9rweTfrqcm2E0+0rfzZ7AWxn8V59peJUmaLxenaJJd9TvtDvDUXcSnQbvOyPRrlj72ZCZjxHpKucFuzJTQgXIGJedfu7HXuV7DyGl187yQdwwC+Xw5dq3udIwxzKsirpRtp8jxzyE6QlRO5lbjzy8h5Cn5LB5TY96zPE1CbdU8AfNiYEDloH16C9sC+wPrObr8esU3tpLRasR9ZhGramY9qKQynWM0Y/mH6nk1R2LeDD5Q5+OQ73Z754G8954uThs99cMy3mxjN8/B1G30fS/6v4HBSiVM71BMJ0AAAAASUVORK5CYII="
                  className="icon"
                  alt="toggle"
                  onClick={() => {
                    handleToggle(todo.id);
                  }}
                ></img>
                {/*delete icon*/}
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSUX0wvth7txwgOD2BX8Gtv-N7PVzOTuZhSBA&usqp=CAU"
                  className="icon"
                  alt="delete"
                  onClick={() => {
                    handledelete(todo.id);
                  }}
                />
              </ul>
            </div>
          ))
        : todoList.map((todo) => (
            <div key={todo.id}>
              <ul className="todo-ul">
                <li
                  style={{
                    textDecoration: todo.isDone ? "line-through" : "none",
                  }}
                >
                  {todo.description}
                </li>
                {/*Edit part*/}
                <Modaltodo
                  handleEdit={() => {
                    dispatch(editTodo(todo.id, newDesc));
                  }}
                  handleChangeDesc={handleChangeDesc}
                  newDesc={newDesc}
                  setShow={setShow}
                  show={show}
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Edit_icon_%28the_Noun_Project_30184%29.svg/1024px-Edit_icon_%28the_Noun_Project_30184%29.svg.png"
                  className="icon"
                  alt="edit"
                  onClick={() => setShow(true)}
                />
                {/*Toggle icon*/}
                <img
                  src="data:image/png;base64,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"
                  className="icon"
                  alt="toggle"
                  onClick={() => {
                    handleToggle(todo.id);
                  }}
                ></img>
                {/*delete icon*/}
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSUX0wvth7txwgOD2BX8Gtv-N7PVzOTuZhSBA&usqp=CAU"
                  className="icon"
                  alt="delete"
                  onClick={() => {
                    handledelete(todo.id);
                  }}
                />
              </ul>
            </div>
          ))}
    </div>
  );
};
export default ListTask;
