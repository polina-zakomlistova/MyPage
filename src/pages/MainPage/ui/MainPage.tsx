import React, { FC } from 'react';
import ProjectsList from 'entities/Projects/ui/ProjectsList';
import styles from './MainPage.module.scss';

export const MainPage: FC = () => {
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>Projects</h1>
            <ProjectsList />
        </div>
    );
};
