n = int(input())  
arr = list(map(int, input().split()))  
count = 0 

for i in range(1, n):  
    if (arr[i]>0 and  arr[i - 1]>0) or (arr[i]<0 and  arr[i - 1]<0) or (arr[i]== arr[i - 1] and arr[i]!=0):  
        count += 1  

print({True: "YES", False: "NO"}[count!=0]) 