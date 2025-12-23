#include<iostream>
#include<vector>
using namespace std;
int main(){
    int n,x;
    vector<int>v;
    cout<<"ENTER THE SIZE OF ARRAY: ";
    cin>>n;
    cout<<endl<<"ENTER THE ELEMENTS OF YOUR ARRAY: ";
    for(int i=0;i<n;i++){
        cin>>x;
        v.push_back(x);
    }
    cout<<endl<<"YOUR ARRAY IS: ";
    for(int j : v){
        cout<<j<< " ";
    }
    int i=0,j=0; 
    int k;
    vector<vector<int>>a;
    for(i=0;i<n;i++){
        for(j=i;j<n;j++){
            vector<int>temp;
            for(k=i;k<=j;k++){
                temp.push_back(v[k]);
            }
            a.push_back(temp);
        }
    }
    cout<<endl<<"ALL SUBARRAYS ARE : ";
    for(auto sub:a){
        

    }

}