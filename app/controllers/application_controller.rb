class ApplicationController < ActionController::Base
    def index
        @stock =Stock.new
        respond_to do |format|  
              format.html  
              format.json  
              format.js 
          end
    end

    def show 
    @stock =Stock.new
    respond_to do |format|
        @post = Post.create(post_params) 
        if @post.save
          # redirect_to "/stocks/#{params[:id]} "
          # redirect_to stocks_path(params[:id])
          puts params[:id]
          format.html { redirect_to @post, notice: 'Stock was successfully added' }
          format.json { render :show, status: :created, location: @stock }
          format.js
        else
          format.html { render :new }
          format.json { render json: @post.errors, status: :unprocessable_entity }
          format.js
        end
      end
    end
     
end
