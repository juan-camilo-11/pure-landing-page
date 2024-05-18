import "pure-ui-web-components";
import "./detail.css";
import { useState } from "react";

interface DetailProps {
    children: React.ReactNode;
    styleVariables?: string[];
}

function Detail({ children, styleVariables }: DetailProps) {
    const [colors, setColors] = useState<{ [key: string]: string }>({});

    const handleColorChange = (variable: string, event: React.ChangeEvent<HTMLInputElement>) => {
        const newColor = event.target.value;
        setColors(prevState => ({
            ...prevState,
            [variable]: newColor
        }));
        //document.body.style.setProperty(variable, newColor);
        const detailElement = document.getElementById("detail");
        if (detailElement) {
          detailElement.style.setProperty(variable, newColor);
        }
    };
    return (
        <section id="detail" className="detail">
            <article className="detail__styles">
                {styleVariables?.map((style) =>
                    <div key={style}>
                        <span>var({style})</span>
                        <input 
                            type="color" 
                            value={colors[style] || '#E9E9E9'} 
                            onChange={(event) => handleColorChange(style, event)} 
                        />
                    </div>
                )}
                {styleVariables === undefined && (
                    <h4>No tiene</h4>
                )

                }
            </article>
            <article className="detail__component">
                {children}
            </article>
        </section>
    );
}

export default Detail;
