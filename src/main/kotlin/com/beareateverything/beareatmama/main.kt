package com.beareateverything.beareatmama

import kotlinx.html.dom.append
import kotlinx.html.js.*
import kotlin.browser.document

fun main(args: Array<String>) {

//    println("Hello from BearEatEverything")

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
                    text("START")
                    onClickFunction = {
                        // TODO: add Menu random
                    }
                }
                h2 {
                    text("ทานมาม่ากับ....")
                    br {}
                    text("ชื่อเมนู")
                }
                p {
                    text("บทคำคำนายจากพี่หมีตัวแตกพุงจะแตกตามแล้วเย้")
                }
            }
        }
        div("shared") {
            a("https://www.facebook.com/beareateverything") {
                div("fa fa-facebook") {}
            }
            // TODO: add share web url
        }
    }
}
