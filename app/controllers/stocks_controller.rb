class StocksController < ApplicationController
  def index
    @stock =Stock.new
    @stocks = Stock.all
    @rowarraydisp = CSV.read("stocks.csv") 
    @user = current_user 
  end

  def show
    @rowarraydisp = CSV.read("stocks.csv") 
    @stock =Stock.new  
    puts params[:search] 
    @stock = params[:id]
    @posts = Post.where(title:params[:id]).reverse
    @post = Post.new
    @user = current_user  
    respond_to do |format| 
      format.js {render inline: "location.reload();" }
      format.html
    end
  end

  def new
    @stock = params[:id]
  end



  def create 
    @stock =Stock.new
    @user = current_user  
    @clicked_stock = params[:stock][:stock_name] 
  #  stocks already in my list
    @all= Stock.all.where(user_id: @user.id)
    @my_stock = @all.where(stock_name: params[:stock][:stock_name]) 
    

    respond_to do |format| 
      if @my_stock.length > 0

      else    
          @stock = Stock.create(stock_params) 
          if @stock.save
            format.html { redirect_to @stock, notice: 'Stock was successfully added' }
            format.json { render :show, status: :created, location: @stock }
            format.js
          else
            format.html { render :new }
            format.json { render json: @stock.errors, status: :unprocessable_entity }
            format.js
          end
      end
    end
  end
 

  def edit
    @stock = params[:id]
   puts params[:id]
  end


  def destroy
    @stock = Stock.find(params[:id]) 
    @stock.destroy 
    respond_to do |format|
      format.html { redirect_to stocks_url, notice: 'Post was successfully destroyed.' }
      format.json { head :no_content }
      format.js {render inline: "location.reload();" }
    end
  end


  def import
    Stock.import(params[:file])
  end

  def mystocks
    @user = current_user 
    @stocks = Stock.where(user_id: @user.id) 
    @rowarraydisp = CSV.read("stocks.csv") 
  end

  private
  def search_params
    params.require(:search).permit(:store )
  end

  def stock_params
    params.require(:stock).permit(:stock_name, :cost, :user_id )
  end

end 