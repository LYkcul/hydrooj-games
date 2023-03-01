const { Route, Handler } = global.Hydro.service.server; // 注册路由所用工具
const { PRIV } = global.Hydro.model.builtin; // 内置 Privilege 权限节点
const { NotFoundError } = global.Hydro.error;
const { PermissionError } = global.Hydro.error;

class GamesHandler extends Handler {
    async get() {
        this.response.template = 'games.html';
   }
}

async function apply() {
    Route('games', '/games', GamesHandler, PRIV.PRIV_USER_PROFILE);
}

global.Hydro.handler.games = apply;