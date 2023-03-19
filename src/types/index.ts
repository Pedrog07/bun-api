import server from 'bunrest'

export type BunServer = ReturnType<typeof server>

export type Router = ReturnType<ReturnType<typeof server>['router']>
