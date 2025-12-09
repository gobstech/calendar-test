import { useEffect, useEffectEvent, useState } from 'react'
import Header from './Header';
import Weekdays from './Weekdays';
import DatesContainer from './DatesContainer';

const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(typeof window !== "undefined" ? window.innerWidth : undefined);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    console.log("Effect ran: ", window.innerWidth);

    return () => {
      window.removeEventListener("resize", handleResize);
    }
  }, []);

  return windowWidth;
};

const Calendar = ({ size }) => {
  const [nav, setNav] = useState(new Date); // controla o mês autal
  const window = useWindowWidth();

  console.log(nav.toLocaleDateString("pt-BR", {
    dateStyle: "long",
  }));

  const weekdays = [
    "Domingo",
    "Segunda-Feira",
    "Terça-Feira",
    "Quarta-Feira",
    "Quinta-Feira",
    "Sexta-Feira",
    "Sábado",
  ];
  const weekdaysShort = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];

  const nextMonth = () => {
    const newDate = new Date(nav);

    newDate.setMonth(nav.getMonth() + 1);

    setNav(newDate);
  }

  const prevMonth = () => {
    const newDate = new Date(nav);

    newDate.setMonth(nav.getMonth() - 1);

    setNav(newDate);
  }

  const [calendarDays, setCalendarDays] = useState([]);

  const renderCalendarDays = () => {
    // Lógica de Cálculo dos dias do mês

    // 1. Cálculos essenciais
    const firstDayOfTheMonth = new Date(nav.getFullYear(), nav.getMonth(), 1).getDay();
    const daysInMonth = new Date(nav.getFullYear(), nav.getMonth() + 1, 0).getDate();

    const daysArr = [];

    // 2. Cria os dias de preenchimento (Padding days)
    // Número de dias de padding é igual ao índice do 'firstDayOfMonth' (0 a 6)
    for (let i = 0; i < firstDayOfTheMonth; i++) {
      // Adiciona cada dia do mês
      daysArr.push({ dayNumber: null, isPadding: true });
    }

    // 3. Cria os dias do MÊS ATUAL
    for (let i = 1; i <= daysInMonth; i++) {
      // Adiciona cada dia do mês
      daysArr.push({ dayNumber: i, isPadding: false })
    }

    setCalendarDays(daysArr);
  };

  useEffect(() => {
    renderCalendarDays();
  }, [nav]);

  return (
    <main className={`container ${size || ""}`}>
      <Header nav={nav} nextMonth={nextMonth} prevMonth={prevMonth} />
      <Weekdays weekdays={weekdaysShort} />
      <DatesContainer calendarDays={calendarDays} />
    </main>
  )
}

export default Calendar

export function capitalizeFirstLetter(value) {
  return String(value).charAt(0).toUpperCase() + String(value).slice(1);s
};
