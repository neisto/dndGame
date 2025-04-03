import { JSX } from 'react'
import classes from './animButton.module.css'
export default function AnimButton(): JSX.Element {
    return (
        <a href='#' className={classes.animated_button1}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Начать приключение!
</a>
    )
}