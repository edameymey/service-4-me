export type UploadItem = {
    url: string;
    name: string;
    type: string;
    size: number;
};

export enum CreateEnum {
    OFFERING = 'offering',
    REQUESTING = 'requesting'
}

export enum LevelEnum {
    BEGINNER_OR_LOW = 0,
    INTERMEDIATE_OR_MEDIUM = 1,
    EXPERT_OR_HIGH = 2,
}
