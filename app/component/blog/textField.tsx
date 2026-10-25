'use client'

import React from "react";
import { ContentItem, MainType } from "@/app/types/blog";
import style from "./main.module.scss";

function getTextStyle(item:ContentItem){
    let res = ''
    if(item.type=="str" && item.style){ 
        
        for (const s of item.style) {
            switch (s) {
                case 'big':
                    res += `${style.text_big} `;
                    break;
                case 'bold':
                    res += `${style.text_bold} `;
                    break;
                case 'small':
                    res += `${style.text_small} `;
                    break;
                case 'thin':
                    res += `${style.text_thin} `;
                    break;
            
                default:
                    break;
            }
        }
    }
    return res;
}

export function BlogMain({data}:{data:MainType}){

    const {content} = data;

    function returnHtml(item:ContentItem){
        switch (item.type) {
            case "str":
                return (
                    <p className={`cursor-light ${style.blogtext} ${getTextStyle(item)}`}>{item.text}</p>
                )
            case "img":
                return (
                    <figure className={style.blogFigure}>
                        <img src={item.url} alt={item.alt} className={style.blogimg}/>
                    </figure>
                )
            case "list":
                return (
                    <div className={style.blogBlock}>
                        <h3 className={`cursor-light ${style.blogtitle}`}>{item.title}</h3>
                        <ul className={`cursor-light ${style.bloglist}`}>
                            {item.content.map((item2,j)=>(
                                <li key={j}>{item2}</li>
                            ))}
                        </ul>
                    </div>
                )
            case "linkList":
                return (
                    <div className={style.blogBlock}>
                        <h3 className={`cursor-light ${style.blogtitle}`}>{item.title}</h3>
                        <ul className={`${style.bloglist} ${style.linklist}`}>
                            {item.content.map((item2,j)=>(
                                <li key={j}>
                                    <a href={item2.url} target="_blank" rel="noreferrer" className="cursor-light">{item2.title}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                )
            default:
                return (
                    <div className={style.blogBlock}>
                        <h3 className={`cursor-light ${style.blogtitle}`}>{item.title}</h3>
                        <h4 className={`cursor-light ${style.blogdescription}`}>{item.description}</h4>
                        <div>
                            {item.content.map((item2,j)=>(
                                <div key={j}>
                                    {returnHtml(item2)}
                                </div>
                            ))}
                        </div>
                    </div>
                )
        }
    }

    return (
        <div className={style.blogMain}>
            {content.map((item,i)=>(
                <div key={i} data-scroll-reveal>
                    {returnHtml(item)}
                </div>
            ))}
        </div>
    );

};