class Stock < ApplicationRecord
    require 'csv' 
    require "http"
    require "json" 

    # read cvs file
    # def self.import(file)
    #     CSV.foreach(file.path, headers: true ) do |x|
    #         puts x
    #     end
    # end 


 def self.one(x)
    username = @username
    password = @password
    request_url = "https://api.intrinio.com/companies?ticker='#{x}'"

    response = HTTP.basic_auth(:user => username, :pass => password)
                .get(request_url)
                .body
    # company = JSON.parse(response)
    @company
 end

 def self.getAll 
    request_url = "https://api.intrinio.com/securities?us_only=Yes"
    response = HTTP.basic_auth(:user => @username, :pass => @password)
    .get(request_url)
    .body

    @company_json = JSON.parse(response)  
    @company = @company_json['data'] 

 end


 def self.get_stock_name
    @stom = {"data"=>[{"ticker"=>"0769929D", "figi_ticker"=>"0769929D:UA", "figi"=>"BBG000QHR2P2"}, {"ticker"=>"1051400D", "figi_ticker"=>nil, "figi"=>"BBG006YWPLL1"}, {"ticker"=>"144ASERA", "figi_ticker"=>nil, "figi"=>"BBG0008C0WW8", "composite_figi"=>nil, "composite_figi_ticker"=>"144ASERA:US"}, {"ticker"=>"144ASERB", "figi_ticker"=>nil, "figi"=>"BBG0008C0WV9", "composite_figi"=>nil, "composite_figi_ticker"=>"144ASERB:US"}, {"ticker"=>"2274054Z", "figi_ticker"=>"2274054Z:UA", "figi"=>"BBG000TRGT25", "composite_figi"=>"BBG000TRGSS9"},]}
    @stom['data']
 end


def self.get_price(tickerUrl)
    request_url = "https://api.intrinio.com/prices?identifier="+tickerUrl
    response = HTTP.basic_auth(:user => @username, :pass => @password)
    .get(request_url)
    .body
    @company_json = JSON.parse(response)
   
end


def self.get_stock_name_and_price
    get_stock_name
end

 
def self.post_user_name(x)
    @post_user_name = User.find(x).email 
    @gud =  email_user_name(@post_user_name)
     
end

def self.email_user_name(x) 
   @email_user = x.split("@").first
    @email_user
end

end
