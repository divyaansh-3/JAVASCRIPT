#include<iostream>
#include<algorithm>
#include<vector>
using namespace std;
int main(){
    int n;
    vector<int>v;
    int x;
    cout<<"enter the size of your array : ";
    cin>>n;
    cout<<endl<<"enter the elements of your array: ";
    for(int i=0;i<n;i++){
        
        cin>>x;
        v.push_back(x);
    }
    for( int i: v){
        cout<<i<<" ";

    }
    int m= *max_element(v.begin(),v.end());
    vector<int>h(m+1,0);
    for(int i=0;i<n;i++){
        h[v[i]]++;
    }
    for(int i=0;i<=m;i++){
        if(h[i]>1){
            cout<<endl<<i<< " has "<<h[i]<<" duplicates";
        }
    }

}