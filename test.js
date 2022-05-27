

    let courses = [
    { name: "Courses in England", prices: [0, 100] }, 
    { name: "Courses in Germany", prices: [500, null] }, 
    { name: "Courses in Italy", prices: [100, 200] }, 
    { name: "Courses in Russia", prices: [null, 400] },
    { name: "Courses in China", prices: [50, 250] },
    { name: "Courses in USA", prices: [200, null] },
    { name: "Courses in Kazakhstan", prices: [56, 324] },
    { name: "Courses in France", prices: [null, null] },
    ]
    let requiredRange1 = [null, 200]
    let requiredRange2 = [100, 350]
    let requiredRange3 = [200, null]  


    function filterCourses(request){
    let availableCourses = []
   
        courses.forEach(course => {
        if(request[0]==null){
                if(request[1]==null){
                availableCourses.push(course.name)
            }
                else{
                    if(course.prices[1] != null){
                        if(request[1] >=course.prices[1]){
                            availableCourses.push(course.name)
                }
                }
            }
            
        } 
        else{
            if(request[1]==null){
                if(course.prices[0] !=null && request[0]<= course.prices[0] ){
                    if(course.prices[1]==null){
                    availableCourses.push(course.name)
                    }
                 
            } 
        } 
            else{
                if(course.prices[0] !=null && request[1]>=course.prices[0] ){
                    if(request[0]<= course.prices[0] ){
                        if(course.prices[1]!=null && request[1] >= course.prices[1]){
                        availableCourses.push(course.name)
                        }
                    } 
                }
        }
        }
        });
    
    return `Доступные курсы: ${availableCourses.join(',')}`
}
console.log(filterCourses(requiredRange1))
    
    function sortedCourses(courses){
        return courses.sort((a, b)=>{
            if(a.prices[0]==null){
                if(a.prices[1]==null){
                    return 1
                }
                if(b.prices[0] == 0 && a.prices[1]>b.prices[1]){
                    return 1
                }    
                return -1
            }
            if(b.prices[0]==null){
                return 1
            }
                return a.prices[0]>b.prices[0]? 1:-1
           
            
    })


    }
    console.log(sortedCourses(courses))
    