"use client"

import { useRef } from "react"
import { motion, useInView, useSpring, useTransform } from "framer-motion"

interface AnimatedCounterProps {
  value: number
  suffix?: string
}

function Counter({ value, suffix = "" }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-40px" })

  const spring = useSpring(0, { duration: 2000, damping: 30 })
  const display = useTransform(spring, (v) => `${Math.floor(v).toLocaleString("pt-BR")}${suffix}`)

  if (isInView) {
    spring.set(value)
  }

  return <motion.span ref={ref}>{display}</motion.span>
}

export function AnimatedCounter({ value, suffix = "" }: AnimatedCounterProps) {
  return <Counter value={value} suffix={suffix} />
}
