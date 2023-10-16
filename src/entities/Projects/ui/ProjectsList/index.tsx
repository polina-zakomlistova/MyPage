import React, { FC } from 'react';
//context
import { observer } from 'mobx-react-lite';
import styles from './index.module.scss';
import useStore from 'features/hooks/useStore';
import Project from 'entities/Projects/ui/Project';
import { IProject } from 'entities/Projects/model/types/projects';

const ProjectList: FC = () => {
    const [projectsStore] = useStore('projects');
    const { items: projects } = projectsStore;

    return (
        <div className={styles.wrapper}>
            <ul className={styles.projects}>
                {projects.map((item: IProject) => (
                    <li className={styles.ProjectWrapper}>
                        <div className={styles.date}>{item.date}</div>
                        <Project
                            name={item.name}
                            description={item.descrition}
                            stack={item.stack}
                            webSite={item?.website}
                            repository={item.repository}
                            images={item?.images}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default observer(ProjectList);
