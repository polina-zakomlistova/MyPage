export interface IProject {
    name: string;
    date?: string;
    id: string | number;
    descrition: string;
    stack: (string | Tehnologies | Stores | UiTehnologies | Validation)[];
    repository: string;
    website?: string;
    images?: string[];
}

export enum Tehnologies {
    JAVA_SCRIPT = 'javaScript',
    TYPE_SCRIPT = 'typeScript',
    WEBPACK = 'webpack',
    CREATE_REACT_APP = 'create react app',
    REACT = 'react',
    DND = 'Drag and Drop from React',
    AXIOS = 'Axios',
}

export enum Stores {
    MOBX = 'mobX',
    REDUX_TOOLKIT = 'redux toolkit',
}

export enum UiTehnologies {
    MATERIAL_UI = 'material ui',
    FORMIK = 'formik',
}

export enum Validation {
    YUP = 'yup',
}

export type IProjectsList = IProject[];
