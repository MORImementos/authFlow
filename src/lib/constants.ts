// WEBSITE
export const BACKEND: URL = 'https://api.projectrio.app';

export enum STAT_ENDPOINTS {
    CHARACTERS = '/characters/',
    GAMES = '/games/',
    EVENTS = '/events/',
    LANDING_DATA = '/landing_data/',
    STAR_CHANCES = '/star_chances/',
    STATS = '/stats/',
    LIVE_GAMES = '/populate_db/ongoing_game/',
    STATS_FIX = '/stats/fix/',
    LADDER_GAMES = '/ladder/games/',
}

export enum USER_ENDPOINTS {
    SIGNUP = '/signup/',
    REGISTER = '/register/',
    VERIFY_EMAIL = '/verify_email/',
    REQUEST_PASSWORD_CHANGE =  '/request_password_change/',
    CHANGE_PASSWORD = '/change_password/',
    LOGIN = '/login/',
    LOGOUT = '/logout/',
    VALIDATE_JWT = '/validate_jwt/',
    REQUEST_NEW_RIO_KEY = '/request_new_rio_key/',
    SET_PRIVACY = '/set_privacy/',
    USER_TAGS = '/user/tags/',
    USER_COMMUNITIES = '/user/communities/',
    USER_PRUNE = '/user/prune/',
}

export enum COMMUNITY_ENDPOINTS {
    COMMUNITY_CREATE = '/community/create/',
    COMMUNITY_JOIN = '/community/join/',
    COMMUNITY_INVITE = '/community/invite/',
    COMMUNITY_MEMBERS = '/community/members/',
    COMMUNITY_TAGS = '/community/tags/',
    COMMUNITY_MANAGE = '/community/manage/',
    COMMUNITY_SPONSOR = '/community/sponsor/',
    COMMUNITY_KEY = '/community/key/',
    COMMUNITY_UPDATE = '/community/update/',
}

// TODO: finish this and others that are 'ADMIN' type endpoints
export enum POPULATE_DB_ENDPOINTS {
    ONGOING_GAME_PRUNE = '/ongoing_game/prune/',
    POPULATE_DB = '/populate_db/',
    MANUAL_SUBMIT_GAME = '/manual_submit_game/',
    UPDATE_GAME_STATUS = '/update_game_status/',
    RECALC_ELO = '/recalc_elo/',

}

export enum UNCATEGORIZED_ENDPOINTS {
    RECREATE_STAT_FILE = '/recreate_stat_file/'
}

export const GET = async (endpoint, param:String='') => {
    const response = await fetch(BACKEND + endpoint + param)
    const res = await response.json();
    return res
}

export enum USERNAME {
    
}

// USER
export const USERNAME_CHARACTER_LIMIT: number = 64;
export const PASSWORD_CHARACTER_LIMIT: number = 500;
export const EMAIL_CHARACTER_LIMIT: number = 120;

// COMMUNITY
export const COMMUNITY_CHARACTER_LIMIT: number = 100;