import { $get, $post } from './request' 

export const getProjectList = params => $get('/project/getList', params)

export const getProjectType = params => $get('/project/getProjectType', params)

export const getLeads = params => $get('/index/getLeads', params)

export const userList = params => $get('/index/userList', params)

export const getProjectTypeDetail = params => $get('/project/getProjectType', params)

export const createProject = data => $post('/project/createProject', data)

