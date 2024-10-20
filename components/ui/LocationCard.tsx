"use client";

import React, { useState, useEffect } from "react";
import { DateTime } from "luxon";

const LocationCard = () => {
  const [mexicoCityTime, setMexicoCityTime] = useState("");
  const [timeDifference, setTimeDifference] = useState<string>("");
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const mexicoTime = DateTime.now()
        .setZone("America/Mexico_City")
        .setLocale("es");
      const local = DateTime.now().setLocale("es");

      const diffInHours = mexicoTime.diff(local, "hours").hours.toFixed(0);

      // Formato de la fecha en español
      const formattedDate = mexicoTime.toFormat("cccc, d LLLL");

      setMexicoCityTime(mexicoTime.toFormat("HH:mm"));
      setTimeDifference(Math.abs(Number(diffInHours)).toString());
      setCurrentDate(formattedDate);
    };

    // Llama a la función cada segundo
    updateTime();
    const interval = setInterval(updateTime, 60000);

    // Limpia el intervalo cuando se desmonta el componente
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex h-full flex-col items-center justify-center text-white">
      <div className="text-center text-xl font-semibold">
        <span>Ubicación en </span>
        <span className="text-light-secondary">Ciudad de méxico</span>
      </div>
      <div className="mt-2 text-center text-sm font-semibold text-gray-300">
        <span>
          {timeDifference &&
          !isNaN(parseFloat(timeDifference)) &&
          parseFloat(timeDifference) > 0
            ? `${timeDifference}h por delante de ti`
            : "Tenemos el mismo horario"}
        </span>
      </div>
      <div className="mt-3 h-px w-full bg-white" />
      <div className="mt-4 text-center">
        <span className="text-4xl font-bold">{mexicoCityTime}</span>
        <span className="ml-1 text-lg">GMT-6</span>
      </div>
      <div className="mt-2 text-center text-sm font-semibold text-gray-300">
        <span>{currentDate}</span>
      </div>
    </div>
  );
};

export default LocationCard;
