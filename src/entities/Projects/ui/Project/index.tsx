import { FC } from 'react';

import styles from './index.module.scss';
import Carousel from 'shared/ui/Carousel';

interface IProject {
    name: string;
    description: string;
    stack: string[];
    images?: string[];
    webSite?: string;
    repository: string;
}

const Project: FC<IProject> = (props) => {
    const { name, description, stack, images, webSite, repository } = props;

    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>{name}</div>
            <div className={styles.info}>
                <div className={styles.left}>
                    <div className={styles.carousel}>
                        {/* <div className={styles.clickMe}>Нажми на меня!</div> */}
                        <Carousel images={images} href={webSite} />
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.description}>{description}</div>
                    {webSite && (
                        <a
                            href={webSite}
                            className={` ${styles.link} ${styles.first}`}
                            target="_blank"
                        >
                            Перейди сюда!
                        </a>
                    )}
                    {repository && (
                        <a
                            href={repository}
                            target="_blank"
                            className={` ${styles.link} ${styles.second}`}
                        >
                            Код на GITHUB
                        </a>
                    )}

                    <ul className={styles.stack}>
                        {stack.map((item) => (
                            <li>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Project;
