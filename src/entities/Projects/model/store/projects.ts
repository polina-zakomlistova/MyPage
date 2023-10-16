import { makeAutoObservable } from 'mobx';
import {
    IProject,
    IProjectsList,
    Stores,
    Tehnologies,
    UiTehnologies,
} from '../types/projects';
import RootStore from 'app/providers/store/config/store';
import TranslateGame1 from 'shared/assets/images/TranslateGame/1.png';
import TranslateGame2 from 'shared/assets/images/TranslateGame/2.png';
import TableWithFilters1 from 'shared/assets/images/TableWithFilters/1.png';
import TableWithFilters2 from 'shared/assets/images/TableWithFilters/2.png';
import Chat1 from 'shared/assets/images/Chat/1.png';
import Shop1 from 'shared/assets/images/Shop/1.png';
import Shop2 from 'shared/assets/images/Shop/2.png';
import Shop3 from 'shared/assets/images/Shop/3.png';
import Shop4 from 'shared/assets/images/Shop/4.png';
import SliderDates1 from 'shared/assets/images/SliderDates/1.png';
import SliderDates2 from 'shared/assets/images/SliderDates/2.png';
import Todo1 from 'shared/assets/images/Todo/1.png';
import Todo2 from 'shared/assets/images/Todo/2.png';

export interface IProjectsStore {
    rootStore: RootStore;
    items: IProjectsList;
}

export default class Project implements IProjectsStore {
    rootStore: RootStore;

    items: IProjectsList = [
        {
            name: 'Translate game',
            id: 0,
            descrition: 'Приложении для обучения английскому языка',
            stack: [
                Tehnologies.CREATE_REACT_APP,
                Tehnologies.TYPE_SCRIPT,
                Stores.MOBX,
                Tehnologies.DND,
                Tehnologies.AXIOS,
            ],
            repository: 'https://github.com/polina-zakomlistova/translate-game',
            website: 'https://polina-zakomlistova.github.io/translate-game/',
            images: [TranslateGame1, TranslateGame2],
            date: '10.2023',
        },
        {
            name: 'Table with filters',
            id: 1,
            descrition:
                'Приложение, выводящее таблицу на форму, позволяющее ее фильтровать по заданным параметрам, осуществлять паггинацию и поиск по наименованию',
            stack: [
                Tehnologies.REACT,
                Tehnologies.WEBPACK,
                Tehnologies.TYPE_SCRIPT,
                Stores.REDUX_TOOLKIT,
                UiTehnologies.MATERIAL_UI,
                Tehnologies.AXIOS,
            ],
            repository:
                'https://github.com/polina-zakomlistova/pageWithFilters',
            website: 'https://polina-zakomlistova.github.io/pageWithFilters/',
            images: [TableWithFilters1, TableWithFilters2],
            date: '09.2023',
        },
        {
            name: 'Chat',
            id: 2,
            descrition:
                'Приложение чата, с помощью которого можно отправлять и принимать сообщения из WhatsApp',
            stack: [Tehnologies.REACT, Stores.MOBX, Tehnologies.AXIOS],
            repository: 'https://github.com/polina-zakomlistova/chat-green-api',
            images: [Chat1],
            date: '05.2023',
        },
        {
            name: 'Slider of dates',
            id: 3,
            descrition:
                'Компонент React, позволяющий выбирать диапазон дат с помощью слайдера',
            stack: [Tehnologies.CREATE_REACT_APP, UiTehnologies.MATERIAL_UI],
            repository:
                'https://github.com/polina-zakomlistova/Slider-of-dates',
            website: 'https://polina-zakomlistova.github.io/Slider-of-dates/',
            images: [SliderDates1, SliderDates2],
            date: '03.2023',
        },
        {
            name: 'Todo',
            id: 4,
            descrition: 'Приложение для управления задачами',
            stack: [Tehnologies.CREATE_REACT_APP],
            repository: 'https://github.com/polina-zakomlistova/todoApp',
            website: 'https://polina-zakomlistova.github.io/todoApp/',
            images: [Todo1, Todo2],
            date: '12.2022',
        },
        {
            name: 'Shop',
            id: 5,
            descrition:
                'Адаптивная верстка интернет-магазина, с использованием препроцессора SCSS',
            stack: [],
            repository: 'https://github.com/polina-zakomlistova/shop',
            website: 'https://polina-zakomlistova.github.io/shop/',
            images: [Shop1, Shop2, Shop4],
            date: '06.2022',
        },
    ];

    get getById() {
        return (id: number) => this.items.find((pr) => pr.id == id);
    }

    get getByName() {
        return (name: string) => this.items.find((pr) => pr.name == name);
    }

    constructor(rootStore: RootStore) {
        makeAutoObservable(this);
        this.rootStore = rootStore;
    }
}
