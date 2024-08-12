
//api to add school details

import { serverUrl } from "./baseUrl"
import { commonApi } from "./commonApi"


//api to register user
export const registerUserApi = async (reqBody)=>{
    return await commonApi('POST',`${serverUrl}/user/register`, reqBody,"")
}

//api to login

export const loginApi = async(reqBody)=>{
    return await commonApi('POST',`${serverUrl}/user/login`,reqBody,"")
}

//api for school registration

export const addSchoolApi=async(reqBody,reqHeader)=>{
    return await commonApi('POST',`${serverUrl}/AddSchool`,reqBody,reqHeader)
}

//api to update school details

export const updateSchoolDetailsApi = async(reqBody,reqHeader,id)=>{
    return await commonApi('PUT',`${serverUrl}/updateSchool/${id}`,reqBody,reqHeader)

}

//api to add  vison mission principal viceprincipal

export const updateMoreSchoolDetailsApi = async(reqBody,reqHeader,id)=>{
    return await commonApi('PUT',`${serverUrl}/updateSchoolvision/${id}`,reqBody,reqHeader)

}

//api to get school list

export const getSchoolsAPi = async(searchKey)=>{
    return await commonApi('GET',`${serverUrl}/schoollist?search=${searchKey}`,"","")
}

//api to delete a school
export const deleteSchoolApi = async(id,reqHeader)=>{
    return await commonApi('DELETE', `${serverUrl}/deleteschool/${id}`,"",reqHeader)
} 

//api to add articles

export const addArticleAPi = async(reqBody,reqHeader)=>{
    return await commonApi('POST', `${serverUrl}/addArticle`,reqBody,reqHeader)
} 

export const getArticlesAPi = async(searchKey)=>{
    return await commonApi('GET',`${serverUrl}/articles?search=${searchKey}`,"","")
}


export const deleteArticleApi = async(id,reqHeader)=>{
    return await commonApi('DELETE', `${serverUrl}/deleteArticle/${id}`,"",reqHeader)
} 

export const getASchoolApi = async(id,reqHeader)=>{
    return await commonApi('get', `${serverUrl}/getASchoolschool/${id}`,"",reqHeader)
}

export const getAArticleApi = async(id,reqHeader)=>{
    return await commonApi('get', `${serverUrl}/getAArticle/${id}`,"",reqHeader)
}


export const getSchoolsUserAPi = async(searchKey)=>{
    return await commonApi('GET',`${serverUrl}/getschoollist?search=${searchKey}`,"","")
}