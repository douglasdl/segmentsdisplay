import React, { useEffect, useState } from "react"
// import './styles/styles.css';

interface ISegments {
    a1: boolean
    a2: boolean
    b: boolean
    c: boolean
    d1: boolean
    d2: boolean
    e: boolean
    f: boolean
    g1: boolean
    g2: boolean
    h: boolean
    j: boolean
    k: boolean
    l: boolean
    m: boolean
    n: boolean
    dp: boolean
}

interface IDisplay16Segments {
    size?: number
    value: string
    colorON?: string
    colorOFF?: string
    showDot?: boolean
}

export default function Display16Segments({ size = 100, value, colorON = "#FF0000", colorOFF = "#250303", showDot = false }: IDisplay16Segments) {
    const [segments, setSegments] = useState<ISegments>({} as ISegments)

    function convertSegments(value: string | number): ISegments {
        switch (value) {
            case "A":
                return {
                    a1: true,
                    a2: true,
                    b: true,
                    c: true,
                    d1: false,
                    d2: false,
                    e: true,
                    f: true,
                    g1: true,
                    g2: true,
                    h: false,
                    j: false,
                    k: false,
                    l: false,
                    m: false,
                    n: false,
                    dp: false
                }
                break;
            case "B":
                return {
                    a1: true,
                    a2: true,
                    b: false,
                    c: true,
                    d1: true,
                    d2: true,
                    e: true,
                    f: true,
                    g1: true,
                    g2: true,
                    h: false,
                    j: false,
                    k: true,
                    l: false,
                    m: false,
                    n: false,
                    dp: false
                }
                break;
            case "C":
                return {
                    a1: true,
                    a2: true,
                    b: false,
                    c: false,
                    d1: true,
                    d2: true,
                    e: true,
                    f: true,
                    g1: false,
                    g2: false,
                    h: false,
                    j: false,
                    k: false,
                    l: false,
                    m: false,
                    n: false,
                    dp: false
                }
                break;
            case "D":
                return {
                    a1: true,
                    a2: true,
                    b: true,
                    c: true,
                    d1: true,
                    d2: true,
                    e: false,
                    f: false,
                    g1: false,
                    g2: false,
                    h: false,
                    j: true,
                    k: false,
                    l: false,
                    m: true,
                    n: false,
                    dp: false
                }
                break;
            case "E":
                return {
                    a1: true,
                    a2: true,
                    b: false,
                    c: false,
                    d1: true,
                    d2: true,
                    e: true,
                    f: true,
                    g1: true,
                    g2: true,
                    h: false,
                    j: false,
                    k: false,
                    l: false,
                    m: false,
                    n: false,
                    dp: false
                }
                break;
            case "F":
                return {
                    a1: true,
                    a2: true,
                    b: false,
                    c: false,
                    d1: false,
                    d2: false,
                    e: true,
                    f: true,
                    g1: true,
                    g2: true,
                    h: false,
                    j: false,
                    k: false,
                    l: false,
                    m: false,
                    n: false,
                    dp: false
                }
                break;
            case "G":
                return {
                    a1: true,
                    a2: true,
                    b: false,
                    c: true,
                    d1: true,
                    d2: true,
                    e: true,
                    f: true,
                    g1: false,
                    g2: true,
                    h: false,
                    j: false,
                    k: false,
                    l: false,
                    m: false,
                    n: false,
                    dp: false
                }
                break;
            case "H":
                return {
                    a1: false,
                    a2: false,
                    b: true,
                    c: true,
                    d1: false,
                    d2: false,
                    e: true,
                    f: true,
                    g1: true,
                    g2: true,
                    h: false,
                    j: false,
                    k: false,
                    l: false,
                    m: false,
                    n: false,
                    dp: false
                }
                break;
            case "I":
                return {
                    a1: true,
                    a2: true,
                    b: false,
                    c: false,
                    d1: true,
                    d2: true,
                    e: false,
                    f: false,
                    g1: false,
                    g2: false,
                    h: false,
                    j: true,
                    k: false,
                    l: false,
                    m: true,
                    n: false,
                    dp: false
                }
                break;
            case "J":
                return {
                    a1: false,
                    a2: false,
                    b: true,
                    c: true,
                    d1: true,
                    d2: true,
                    e: true,
                    f: false,
                    g1: false,
                    g2: false,
                    h: false,
                    j: false,
                    k: false,
                    l: false,
                    m: false,
                    n: false,
                    dp: false
                }
                break;
            case "K":
                return {
                    a1: false,
                    a2: false,
                    b: false,
                    c: false,
                    d1: false,
                    d2: false,
                    e: true,
                    f: true,
                    g1: true,
                    g2: false,
                    h: false,
                    j: false,
                    k: true,
                    l: true,
                    m: false,
                    n: false,
                    dp: false
                }
                break;
            case "L":
                return {
                    a1: false,
                    a2: false,
                    b: false,
                    c: false,
                    d1: true,
                    d2: true,
                    e: true,
                    f: true,
                    g1: false,
                    g2: false,
                    h: false,
                    j: false,
                    k: false,
                    l: false,
                    m: false,
                    n: false,
                    dp: false
                }
                break;
            case "M":
                return {
                    a1: false,
                    a2: false,
                    b: true,
                    c: true,
                    d1: false,
                    d2: false,
                    e: true,
                    f: true,
                    g1: false,
                    g2: false,
                    h: true,
                    j: false,
                    k: true,
                    l: false,
                    m: true,
                    n: false,
                    dp: false
                }
                break;
            case "N":
                return {
                    a1: false,
                    a2: false,
                    b: true,
                    c: true,
                    d1: false,
                    d2: false,
                    e: true,
                    f: true,
                    g1: false,
                    g2: false,
                    h: true,
                    j: false,
                    k: false,
                    l: true,
                    m: false,
                    n: false,
                    dp: false
                }
                break;
            case "O":
                return {
                    a1: true,
                    a2: true,
                    b: true,
                    c: true,
                    d1: true,
                    d2: true,
                    e: true,
                    f: true,
                    g1: false,
                    g2: false,
                    h: false,
                    j: false,
                    k: false,
                    l: false,
                    m: false,
                    n: false,
                    dp: false
                }
                break;
            case "P":
                return {
                    a1: true,
                    a2: true,
                    b: true,
                    c: false,
                    d1: false,
                    d2: false,
                    e: true,
                    f: true,
                    g1: true,
                    g2: true,
                    h: false,
                    j: false,
                    k: false,
                    l: false,
                    m: false,
                    n: false,
                    dp: false
                }
                break;
            case "Q":
                return {
                    a1: true,
                    a2: true,
                    b: true,
                    c: true,
                    d1: true,
                    d2: true,
                    e: true,
                    f: true,
                    g1: false,
                    g2: false,
                    h: false,
                    j: false,
                    k: false,
                    l: true,
                    m: false,
                    n: false,
                    dp: false
                }
                break;
            case "R":
                return {
                    a1: true,
                    a2: true,
                    b: true,
                    c: false,
                    d1: false,
                    d2: false,
                    e: true,
                    f: true,
                    g1: true,
                    g2: true,
                    h: false,
                    j: false,
                    k: false,
                    l: true,
                    m: false,
                    n: false,
                    dp: false
                }
                break;
            case "S":
                return {
                    a1: true,
                    a2: true,
                    b: false,
                    c: true,
                    d1: true,
                    d2: true,
                    e: false,
                    f: false,
                    g1: false,
                    g2: true,
                    h: true,
                    j: false,
                    k: false,
                    l: false,
                    m: false,
                    n: false,
                    dp: false
                }
                break;
            case "T":
                return {
                    a1: true,
                    a2: true,
                    b: false,
                    c: false,
                    d1: false,
                    d2: false,
                    e: false,
                    f: false,
                    g1: false,
                    g2: false,
                    h: false,
                    j: true,
                    k: false,
                    l: false,
                    m: true,
                    n: false,
                    dp: false
                }
                break;
            case "U":
                return {
                    a1: false,
                    a2: false,
                    b: true,
                    c: true,
                    d1: true,
                    d2: true,
                    e: true,
                    f: true,
                    g1: false,
                    g2: false,
                    h: false,
                    j: false,
                    k: false,
                    l: false,
                    m: false,
                    n: false,
                    dp: false
                }
                break;
            case "V":
                return {
                    a1: false,
                    a2: false,
                    b: false,
                    c: false,
                    d1: false,
                    d2: false,
                    e: true,
                    f: true,
                    g1: false,
                    g2: false,
                    h: false,
                    j: false,
                    k: true,
                    l: false,
                    m: false,
                    n: true,
                    dp: false
                }
                break;
            case "W":
                return {
                    a1: false,
                    a2: false,
                    b: true,
                    c: true,
                    d1: false,
                    d2: false,
                    e: true,
                    f: true,
                    g1: false,
                    g2: false,
                    h: false,
                    j: false,
                    k: false,
                    l: true,
                    m: false,
                    n: true,
                    dp: false
                }
                break;
            case "X":
                return {
                    a1: false,
                    a2: false,
                    b: false,
                    c: false,
                    d1: false,
                    d2: false,
                    e: false,
                    f: false,
                    g1: false,
                    g2: false,
                    h: true,
                    j: false,
                    k: true,
                    l: true,
                    m: false,
                    n: true,
                    dp: false
                }
                break;
            case "Y":
                return {
                    a1: false,
                    a2: false,
                    b: false,
                    c: false,
                    d1: false,
                    d2: false,
                    e: false,
                    f: false,
                    g1: false,
                    g2: false,
                    h: true,
                    j: false,
                    k: true,
                    l: false,
                    m: true,
                    n: false,
                    dp: false
                }
                break;
            case "Z":
                return {
                    a1: true,
                    a2: true,
                    b: false,
                    c: false,
                    d1: true,
                    d2: true,
                    e: false,
                    f: false,
                    g1: false,
                    g2: false,
                    h: false,
                    j: false,
                    k: true,
                    l: false,
                    m: false,
                    n: true,
                    dp: false
                }
                break;
            case "a":
                return {
                    a1: true,
                    a2: true,
                    b: true,
                    c: true,
                    d1: true,
                    d2: true,
                    e: true,
                    f: false,
                    g1: true,
                    g2: true,
                    h: false,
                    j: false,
                    k: false,
                    l: false,
                    m: false,
                    n: false,
                    dp: false
                }
                break;
            case "b":
                return {
                    a1: false,
                    a2: false,
                    b: false,
                    c: true,
                    d1: true,
                    d2: true,
                    e: true,
                    f: true,
                    g1: true,
                    g2: true,
                    h: false,
                    j: false,
                    k: false,
                    l: false,
                    m: false,
                    n: false,
                    dp: false
                }
                break;
            case "c":
                return {
                    a1: false,
                    a2: false,
                    b: false,
                    c: false,
                    d1: true,
                    d2: true,
                    e: true,
                    f: false,
                    g1: true,
                    g2: true,
                    h: false,
                    j: false,
                    k: false,
                    l: false,
                    m: false,
                    n: false,
                    dp: false
                }
                break;
            case "d":
                return {
                    a1: false,
                    a2: false,
                    b: true,
                    c: true,
                    d1: true,
                    d2: true,
                    e: true,
                    f: false,
                    g1: true,
                    g2: true,
                    h: false,
                    j: false,
                    k: false,
                    l: false,
                    m: false,
                    n: false,
                    dp: false
                }
                break;
            case "e":
                return {
                    a1: true,
                    a2: true,
                    b: true,
                    c: false,
                    d1: true,
                    d2: true,
                    e: true,
                    f: true,
                    g1: true,
                    g2: true,
                    h: false,
                    j: false,
                    k: false,
                    l: false,
                    m: false,
                    n: false,
                    dp: false
                }
                break;
            case "f":
                return {
                    a1: false,
                    a2: true,
                    b: false,
                    c: false,
                    d1: false,
                    d2: false,
                    e: false,
                    f: false,
                    g1: true,
                    g2: true,
                    h: false,
                    j: true,
                    k: false,
                    l: false,
                    m: true,
                    n: false,
                    dp: false
                }
                break;
            case "g":
                return {
                    a1: true,
                    a2: true,
                    b: true,
                    c: true,
                    d1: true,
                    d2: true,
                    e: false,
                    f: true,
                    g1: true,
                    g2: true,
                    h: false,
                    j: false,
                    k: false,
                    l: false,
                    m: false,
                    n: false,
                    dp: false
                }
                break;
            case "h":
                return {
                    a1: false,
                    a2: false,
                    b: false,
                    c: true,
                    d1: false,
                    d2: false,
                    e: true,
                    f: true,
                    g1: true,
                    g2: true,
                    h: false,
                    j: false,
                    k: false,
                    l: false,
                    m: false,
                    n: false,
                    dp: false
                }
                break;
            case "i":
                return {
                    a1: true,
                    a2: false,
                    b: false,
                    c: false,
                    d1: true,
                    d2: true,
                    e: false,
                    f: false,
                    g1: true,
                    g2: false,
                    h: false,
                    j: false,
                    k: false,
                    l: false,
                    m: true,
                    n: false,
                    dp: false
                }
                break;
            case "j":
                return {
                    a1: true,
                    a2: true,
                    b: false,
                    c: true,
                    d1: true,
                    d2: true,
                    e: false,
                    f: false,
                    g1: false,
                    g2: false,
                    h: false,
                    j: false,
                    k: false,
                    l: false,
                    m: false,
                    n: false,
                    dp: false
                }
                break;
            case "k":
                return {
                    a1: false,
                    a2: false,
                    b: false,
                    c: false,
                    d1: false,
                    d2: false,
                    e: true,
                    f: true,
                    g1: true,
                    g2: true,
                    h: false,
                    j: false,
                    k: false,
                    l: true,
                    m: false,
                    n: false,
                    dp: false
                }
                break;
            case "l":
                return {
                    a1: true,
                    a2: false,
                    b: false,
                    c: false,
                    d1: false,
                    d2: true,
                    e: false,
                    f: false,
                    g1: false,
                    g2: false,
                    h: false,
                    j: true,
                    k: false,
                    l: false,
                    m: true,
                    n: false,
                    dp: false
                }
                break;
            case "m":
                return {
                    a1: false,
                    a2: false,
                    b: false,
                    c: true,
                    d1: false,
                    d2: false,
                    e: true,
                    f: false,
                    g1: true,
                    g2: true,
                    h: false,
                    j: false,
                    k: false,
                    l: false,
                    m: true,
                    n: false,
                    dp: false
                }
                break;
            case "n":
                return {
                    a1: true,
                    a2: true,
                    b: true,
                    c: true,
                    d1: false,
                    d2: false,
                    e: true,
                    f: true,
                    g1: false,
                    g2: false,
                    h: false,
                    j: false,
                    k: false,
                    l: false,
                    m: false,
                    n: false,
                    dp: false
                }
                break;
            case "o":
                return {
                    a1: false,
                    a2: false,
                    b: false,
                    c: true,
                    d1: true,
                    d2: true,
                    e: true,
                    f: false,
                    g1: true,
                    g2: true,
                    h: false,
                    j: false,
                    k: false,
                    l: false,
                    m: false,
                    n: false,
                    dp: false
                }
                break;
            case "p":
                return {
                    a1: true,
                    a2: true,
                    b: false,
                    c: false,
                    d1: false,
                    d2: false,
                    e: true,
                    f: true,
                    g1: true,
                    g2: false,
                    h: false,
                    j: false,
                    k: true,
                    l: false,
                    m: false,
                    n: false,
                    dp: false
                }
                break;
            case "q":
                return {
                    a1: true,
                    a2: true,
                    b: true,
                    c: true,
                    d1: false,
                    d2: false,
                    e: false,
                    f: true,
                    g1: true,
                    g2: false,
                    h: false,
                    j: false,
                    k: true,
                    l: false,
                    m: false,
                    n: false,
                    dp: false
                }
                break;
            case "r":
                return {
                    a1: false,
                    a2: false,
                    b: false,
                    c: false,
                    d1: false,
                    d2: false,
                    e: true,
                    f: false,
                    g1: true,
                    g2: true,
                    h: false,
                    j: false,
                    k: false,
                    l: false,
                    m: false,
                    n: false,
                    dp: false
                }
                break;
            case "s":
                return {
                    a1: false,
                    a2: false,
                    b: false,
                    c: false,
                    d1: true,
                    d2: true,
                    e: false,
                    f: false,
                    g1: false,
                    g2: true,
                    h: false,
                    j: false,
                    k: false,
                    l: true,
                    m: false,
                    n: false,
                    dp: false
                }
                break;
            case "t":
                return {
                    a1: false,
                    a2: false,
                    b: false,
                    c: false,
                    d1: false,
                    d2: true,
                    e: false,
                    f: false,
                    g1: true,
                    g2: true,
                    h: false,
                    j: true,
                    k: false,
                    l: false,
                    m: true,
                    n: false,
                    dp: false
                }
                break;
            case "u":
                return {
                    a1: false,
                    a2: false,
                    b: false,
                    c: true,
                    d1: true,
                    d2: true,
                    e: true,
                    f: false,
                    g1: false,
                    g2: false,
                    h: false,
                    j: false,
                    k: false,
                    l: false,
                    m: false,
                    n: false,
                    dp: false
                }
                break;
            case "v":
                return {
                    a1: false,
                    a2: false,
                    b: false,
                    c: false,
                    d1: false,
                    d2: false,
                    e: true,
                    f: false,
                    g1: false,
                    g2: false,
                    h: false,
                    j: false,
                    k: false,
                    l: false,
                    m: false,
                    n: true,
                    dp: false
                }
                break;
            case "w":
                return {
                    a1: false,
                    a2: false,
                    b: false,
                    c: true,
                    d1: false,
                    d2: false,
                    e: true,
                    f: false,
                    g1: false,
                    g2: false,
                    h: false,
                    j: false,
                    k: false,
                    l: true,
                    m: false,
                    n: true,
                    dp: false
                }
                break;
            case "x":
                return {
                    a1: false,
                    a2: false,
                    b: false,
                    c: false,
                    d1: false,
                    d2: false,
                    e: false,
                    f: false,
                    g1: true,
                    g2: true,
                    h: false,
                    j: false,
                    k: false,
                    l: true,
                    m: false,
                    n: true,
                    dp: false
                }
                break;
            case "y":
                return {
                    a1: false,
                    a2: false,
                    b: true,
                    c: true,
                    d1: true,
                    d2: true,
                    e: false,
                    f: false,
                    g1: false,
                    g2: true,
                    h: false,
                    j: true,
                    k: false,
                    l: false,
                    m: false,
                    n: false,
                    dp: false
                }
                break;
            case "z":
                return {
                    a1: false,
                    a2: false,
                    b: false,
                    c: false,
                    d1: true,
                    d2: false,
                    e: false,
                    f: false,
                    g1: true,
                    g2: false,
                    h: false,
                    j: false,
                    k: false,
                    l: false,
                    m: false,
                    n: true,
                    dp: false
                }
                break;
            case "0":
                return {
                    a1: true,
                    a2: true,
                    b: true,
                    c: true,
                    d1: true,
                    d2: true,
                    e: true,
                    f: true,
                    g1: false,
                    g2: false,
                    h: false,
                    j: false,
                    k: true,
                    l: false,
                    m: false,
                    n: true,
                    dp: false
                }
                break;
            case "1":
                return {
                    a1: false,
                    a2: false,
                    b: true,
                    c: true,
                    d1: false,
                    d2: false,
                    e: false,
                    f: false,
                    g1: false,
                    g2: false,
                    h: false,
                    j: false,
                    k: false,
                    l: false,
                    m: false,
                    n: false,
                    dp: false
                }
                break;
            case "2":
                return {
                    a1: true,
                    a2: true,
                    b: true,
                    c: false,
                    d1: true,
                    d2: true,
                    e: true,
                    f: false,
                    g1: true,
                    g2: true,
                    h: false,
                    j: false,
                    k: false,
                    l: false,
                    m: false,
                    n: false,
                    dp: false
                }
                break;
            case "3":
                return {
                    a1: true,
                    a2: true,
                    b: true,
                    c: true,
                    d1: true,
                    d2: true,
                    e: false,
                    f: false,
                    g1: true,
                    g2: true,
                    h: false,
                    j: false,
                    k: false,
                    l: false,
                    m: false,
                    n: false,
                    dp: false
                }
                break;
            case "4":
                return {
                    a1: false,
                    a2: false,
                    b: true,
                    c: true,
                    d1: false,
                    d2: false,
                    e: false,
                    f: true,
                    g1: true,
                    g2: true,
                    h: false,
                    j: false,
                    k: false,
                    l: false,
                    m: false,
                    n: false,
                    dp: false
                }
                break;
            case "5":
                return {
                    a1: true,
                    a2: true,
                    b: false,
                    c: true,
                    d1: true,
                    d2: true,
                    e: false,
                    f: true,
                    g1: true,
                    g2: true,
                    h: false,
                    j: false,
                    k: false,
                    l: false,
                    m: false,
                    n: false,
                    dp: false
                }
                break;
            case "6":
                return {
                    a1: true,
                    a2: true,
                    b: false,
                    c: true,
                    d1: true,
                    d2: true,
                    e: true,
                    f: true,
                    g1: true,
                    g2: true,
                    h: false,
                    j: false,
                    k: false,
                    l: false,
                    m: false,
                    n: false,
                    dp: false
                }
                break;
            case "7":
                return {
                    a1: true,
                    a2: true,
                    b: true,
                    c: true,
                    d1: false,
                    d2: false,
                    e: false,
                    f: false,
                    g1: false,
                    g2: false,
                    h: false,
                    j: false,
                    k: false,
                    l: false,
                    m: false,
                    n: false,
                    dp: false
                }
                break;
            case "8":
                return {
                    a1: true,
                    a2: true,
                    b: true,
                    c: true,
                    d1: true,
                    d2: true,
                    e: true,
                    f: true,
                    g1: true,
                    g2: true,
                    h: false,
                    j: false,
                    k: false,
                    l: false,
                    m: false,
                    n: false,
                    dp: false
                }
                break;
            case "9":
                return {
                    a1: true,
                    a2: true,
                    b: true,
                    c: true,
                    d1: false,
                    d2: false,
                    e: false,
                    f: true,
                    g1: true,
                    g2: true,
                    h: false,
                    j: false,
                    k: false,
                    l: false,
                    m: false,
                    n: false,
                    dp: false
                }
                break;
            case "°":
                return {
                    a1: true,
                    a2: true,
                    b: true,
                    c: false,
                    d1: false,
                    d2: false,
                    e: false,
                    f: true,
                    g1: true,
                    g2: true,
                    h: false,
                    j: false,
                    k: false,
                    l: false,
                    m: false,
                    n: false,
                    dp: false
                }
                break;
            case "%":
                return {
                    a1: true,
                    a2: false,
                    b: false,
                    c: true,
                    d1: false,
                    d2: true,
                    e: false,
                    f: true,
                    g1: true,
                    g2: true,
                    h: false,
                    j: true,
                    k: true,
                    l: false,
                    m: true,
                    n: true,
                    dp: false
                }
                break;
            default:
                break;
        }
        return {
            a1: false,
            a2: false,
            b: false,
            c: false,
            d1: false,
            d2: false,
            e: false,
            f: false,
            g1: false,
            g2: false,
            h: false,
            j: false,
            k: false,
            l: false,
            m: false,
            n: false,
            dp: false
        }
    }

    useEffect(() => {
        setSegments(convertSegments(value))
        if (showDot) {
            setSegments({
                ...segments,
                dp: true
            })
        }
    }, [segments])

    return (
        <div style={{ width: 75, height: 100 }}>
            <svg
                width={size * 0.7428}
                height={size}
                viewBox="0 0 1369 1843"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M752 127L824 55.5L772.5 0H430.5L384.5 47.5L456.5 127H752Z"
                    fill={segments.a1 ? colorON : colorOFF}
                />
                <path
                    d="M1208.5 127.5L1311 32L1282 0H951L868.5 64L933 127.5H1208.5Z"
                    fill={segments.a2 ? colorON : colorOFF}
                />
                <path
                    d="M1099.5 833L1150 893L1233.5 817.5L1368.5 110L1326.5 65L1234 153L1099.5 833Z"
                    fill={segments.b ? colorON : colorOFF}
                />
                <path
                    d="M947.5 1698.5L1020 1768L1072.5 1722.5L1197 993L1138.5 941L1061 1015L947.5 1698.5Z"
                    fill={segments.c ? colorON : colorOFF}
                />
                <path
                    d="M500.5 1770L452 1715.5H159C153.5 1715.5 69.5 1807.5 64.5 1807.5C60.5 1807.5 85.1667 1831.17 98 1843H430.5L500.5 1770Z"
                    fill={segments.d1 ? colorON : colorOFF}
                />
                <path
                    d="M628.5 1715.5C604.167 1734.67 555.1 1773.1 553.5 1773.5L610 1840H942L987 1792.5L914.5 1715.5H628.5Z"
                    fill={segments.d2 ? colorON : colorOFF}
                />
                <path
                    d="M0 1727.5L45.5 1774L147 1679.5L274.5 1005L222.5 942.5L139.5 1018.5L0 1727.5Z"
                    fill={segments.e ? colorON : colorOFF}
                />
                <path
                    d="M429.5 148L351.5 60L303 113.5L177.5 819.5L231 891L309 824L429.5 148Z"
                    fill={segments.f ? colorON : colorOFF}
                />
                <path
                    d="M538 983L655 914L580.5 859H318.5L253 921L306 983H538Z"
                    fill={segments.g1 ? colorON : colorOFF}
                />
                <path
                    d="M822 857L717.5 914L795 983H1039.5L1119 910C1099.67 894 1061 861 1061 857C1061 853 901.667 855.333 822 857Z"
                    fill={segments.g2 ? colorON : colorOFF}
                />
                <path
                    d="M587 837L670.5 900.5L648.5 632L519.5 254L448 172.5L414 360.5L587 837Z"
                    fill={segments.h ? colorON : colorOFF}
                />
                <path
                    d="M666.5 632L688 862.5L809 632L902.5 147L843 87.5L758.5 161L666.5 632Z"
                    fill={segments.j ? colorON : colorOFF}
                />
                <path
                    d="M837 823L704 893.5L853.5 598L1065 291L1197.5 175L1162 369L837 823Z"
                    fill={segments.k ? colorON : colorOFF}
                />
                <path
                    d="M959 1486L929 1669C903.167 1636 850.8 1570 848 1570C845.2 1570 763.5 1330.33 723 1210.5L699.5 941L780.5 1002.5L959 1486Z"
                    fill={segments.l ? colorON : colorOFF}
                />
                <path
                    d="M478.5 1687L530.5 1749L619 1680.5L699 1181L679 960.5L557 1223.5L478.5 1687Z"
                    fill={segments.m ? colorON : colorOFF}
                />
                <path
                    d="M304.5 1545.5C264.333 1583.5 183.4 1659.6 181 1660L212 1458.5L530 1011L670.5 930.5L522.5 1240.5L304.5 1545.5Z"
                    fill={segments.n ? colorON : colorOFF}
                />
                <circle
                    cx="1234"
                    cy="1772"
                    r="66"
                    fill={segments.dp ? colorON : colorOFF}
                />
            </svg>
        </div>
    )
}