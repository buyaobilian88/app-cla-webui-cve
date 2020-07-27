export const login = '/v1/login'    //loginIn
export const getUserInfo = 'https://gitee.com/api/v5/user'    //获取用户信息  参数  access_token
export const uploadCla = '/v1/cla'    //上传Cla post 参数  text,name,language,user
export const getClaInfo = '/v1/cla'    //获取cla get
export const delCla = '/v1/cla'    //删除cla delete
export const uploadMeta = '/v1/meta'    //上传metadata get
export const getMeta = '/v1/meta'    //获取metadata get
export const delMeta = '/v1/meta'    //删除metadata delete
export const getOrgsInfo = 'https://gitee.com/api/v5/user/orgs'
// export const getRepositoriesOfOrg = `https://gitee.com/api/v5/orgs/${org}/repos`    //获取仓库信息
export const linkRepository = '/v1/org-repo'    //链接开源项目  post
export const getLinkedRepoList = '/v1/org-repo'    //链接开源项目   get
export const unLinkRepository = '/v1/org-repo'    //断开链接开源项目 delete
export const signCla = '/v1/signCla'    //签署协议 参数
export const verifyCode = '/v1/verifyCode'    //签署协议 参数
export const getLinkedRepositories = '/v1/getLinkedRepositories'    //获取发布的开源项目  参数 userName
export const getPersonalRepositories = '/v1/getPersonalRepositories'    //获取个人签署的项目  参数 userName
export const getCompanyRepositories = '/v1/getCompanyRepositories'    //获取企业签署的项目  参数 userName
export const getCompanyPersonRepositories = '/v1/getCompanyPersonRepositories'    //获取企业个人签署的项目  参数 userName