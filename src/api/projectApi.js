import { $get, $post, $put } from './request' 

export const getProjectList = params => $get('/project/getList', params)

export const getProjectType = params => $get('/project/getProjectType', params)

export const getLeads = params => $get('/index/getLeads', params)

export const userList = params => $get('/index/userList', params)

export const getProjectTypeDetail = params => $get('/project/getProjectType', params)

export const createProject = data => $post('/project/createProject', data)

export const getGroupStaff = params => $get('/index/getGroupStaff', params)

export const updateProject = data => $put('/project/updateProject', data)

export const getProjectDetail = params => $get('/project/getProjectDetail', params)
