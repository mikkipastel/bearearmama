package com.beareateverything.beareatmama

import kotlinx.html.dom.append
import kotlinx.html.id
import kotlinx.html.img
import kotlinx.html.js.*
import kotlin.browser.document
import kotlin.js.Math

fun main(args: Array<String>) {

    println("Hello from BearEatEverything")

    document.body?.append {
        div("main") {
            div("header") {
                h1 {
                    text("น้องหมีตัวแตก")
                    br {}
                    img("logo", "images/app_onemeal.png")
                }
                h2 {
                    text("กินมาม่ากับอะไรดี")
                }
                h4 {
                    text ("เมื่อคุณอยู่ในช่วงสิ้นเดือน แต่ไม่อยากทานมาม่าเปล่าๆ แต่ไม่รู้ว่ากินกับอะไรดี")
                    br {}
                    text ("ปล. ขำๆนะจ๊ะ")
                }
            }
            div ("random") {
                button {
                    text("RANDOM")
                    id = "randomBtn"
                    onClickFunction = {
                        randomMenu()
                    }
                }

//                div ("result") {}
            }
        }
//        div("shared") {
//            a("https://www.facebook.com/beareateverything") {
//                div("fa fa-facebook") {}
//            }
//        }

    }


}

fun randomMenu() {

    val randomNum = Math.floor(Math.random() * choice.size)

    val menuCover = choice[randomNum].cover
    val menuTitle = choice[randomNum].title
    val menuDescription = choice[randomNum].description

    document.getElementById("header")?.innerHTML = menuTitle

    val cover = document.getElementById("cover")
    cover?.setAttribute("src", menuCover)

    document.getElementById("description")?.innerHTML = menuDescription
}
