"use client"

import { useState, useEffect } from "react"
import { MdAccessTime } from "react-icons/md"

export default function SalesTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 23,
    minutes: 19,
    seconds: 56,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 }
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="w-full">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="flex items-center">
          <div className="bg-red-500 p-2 rounded">
            <MdAccessTime className="text-white text-xl" />
          </div>
          <div className="ml-3">
            <p className="text-red-500 font-medium">Today&apos;s</p>
            <h2 className="text-2xl font-bold">Flash Sales</h2>
          </div>
        </div>

        <div className="flex items-center gap-1 sm:gap-2">
          <div className="flex items-center">
            <div className="flex flex-col items-center">
              <span className="text-2xl sm:text-3xl font-bold">{timeLeft.days.toString().padStart(2, "0")}</span>
              <span className="text-xs text-gray-500">Days</span>
            </div>
            <span className="text-2xl sm:text-3xl font-bold mx-1 sm:mx-2">:</span>
          </div>

          <div className="flex items-center">
            <div className="flex flex-col items-center">
              <span className="text-2xl sm:text-3xl font-bold">{timeLeft.hours.toString().padStart(2, "0")}</span>
              <span className="text-xs text-gray-500">Hours</span>
            </div>
            <span className="text-2xl sm:text-3xl font-bold mx-1 sm:mx-2">:</span>
          </div>

          <div className="flex items-center">
            <div className="flex flex-col items-center">
              <span className="text-2xl sm:text-3xl font-bold">{timeLeft.minutes.toString().padStart(2, "0")}</span>
              <span className="text-xs text-gray-500">Minutes</span>
            </div>
            <span className="text-2xl sm:text-3xl font-bold mx-1 sm:mx-2">:</span>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-2xl sm:text-3xl font-bold">{timeLeft.seconds.toString().padStart(2, "0")}</span>
            <span className="text-xs text-gray-500">Seconds</span>
          </div>
        </div>
      </div>
    </div>
  )
}

